<template>
    <ev-container>
        <form @submit.prevent="$emit('submit',value)">
            <h1 class="text-center">{{ messages.title }}</h1>
            <div class="row justify-content-center">
                <div class="col-12 col-sm-6 col-md-4" v-for="prop in formList" :key="prop">
                    <ev-input :value="getValue(schema[prop])" @input="setData($event, schema[prop])" :config="schema[prop]"></ev-input>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                    <div class="form-group">
                        <label for="selectCompany">Example multiple select</label>
                        <select class="form-control" :value="value.company.toLowerCase()" @change="setData($event.target.value,{ dataPath: 'company' })" required id="selectCompany">
                            <option value="" selected disabled>Select</option>
                            <option :value="opt" v-for="opt in companyList" :key="opt">
                                {{ opt }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <ev-submit :busy="busy" :disabled="disabled" :message="messages.button" variation="success"></ev-submit>
                </div>
            </div>
        </form>
    </ev-container>
</template>

<script>
import genericInput from '@/components/shared/generic-input.vue'
import ButtonSubmit from '@/components/shared/submit-button.vue'
import { set, get } from 'lodash'

export default {
    props: {
        value:{
            default: function(){
                return {}
            }
        },
        busy:{
            type: Boolean,
            default: false
        },
        disabled:{
            type: Boolean,
            default: false
        },
        update:{
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        companyList: [ "apple", "everis", "yahoo", "google","microsoft", "nubank","facebook", "ibm", "oracle"],
        companySchema: getParams('company','Company'),
        defaultSchema:{
            name: getParams("name","Name"),
            userName: getParams("userName","User name","userName"),
            // password: getParams("password","Password","password", true, "password"),
            // company: getParams("company","Company"),
            salary: getParams("salary","Salary","salary","number", true),
            city: getParams("address.city","City"),
            neighborhood: getParams("address.neighborhood","Neighborhood"),
            street: getParams("address.street","street"),
            number: getParams("address.number","number"),
        }
    }),
    components:{
        'ev-input': genericInput,
        'ev-submit': ButtonSubmit
    },
    computed:{
        messages() {
            return {
                title:  this.update ? `Update User: ${this.value.userName}` : 'Create User',
                button: this.update ? 'Update User' : 'Create User'
            }
        }, 
        formList(){
            return Object.keys(this.schema)
        },
        schema(){
            let schema = this.defaultSchema
            if(!this.update){
                schema['password'] = getParams("password","Password","password", "password")
            }
            return schema
        }
    },
    // ({ dataPath: 'company' })
    methods:{
        setData(value,{ dataPath }){
            let copyValue = Object.assign({},this.value)
            set(copyValue,dataPath,value)
            this.$emit('input', copyValue)
        },
        getValue({ dataPath }){
            return get(this.value,dataPath)
        }
    },
}
function getParams(dataPath,label,name,type = 'text',currency = false){
    return {
        dataPath: dataPath,
        label: label,
        name: name || label.toLowerCase(),
        placeholder: `Your ${label}`,
        required: true,
        type: type,
        currency: currency
    }
}
</script>

<style>

</style>
