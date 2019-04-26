<template>
    <div id="input-group-2" role="group" class="form-group">
        <label id="input-group-2__BV_label_" for="input-2" class="d-block">{{ config.label }}</label>
        <div>
            <input          
                @input="$emit('input',$event.target.value)"
                :value="value"
                :id="id" 
                :type="config.type"
                :name="config.name" 
                :placeholder="config.placeholder" 
                :required="config.required"
                aria-required="true"
                class="form-control">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            required: true
        },
        config:{},
    },
    computed:{
        id(){
            return this._uid
        },
    }  
}

</script>
