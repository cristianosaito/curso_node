<template>
<div class="mt-3 mb-3">
    <ev-form-user 
        :class=" error ? 'border border-danger form-user' : 'form-user'" 
        v-model="formatedData"
        :disabled="disabled" 
        :busy="busy"
        :update="updated" 
        @submit="onSubmit"></ev-form-user>
</div>
</template>

<script>
import FormUser from '@/components/forms/userForm'
export default {
    data: () => ({
        updated: false,
        busy: false,
        error: false,
        disabled: false,
        formatedData: {
            name: '',
            userName: '',
            password: '',
            company: '',
            salary: '',
            address: {
                city: '',
                number: '',
                neighborhood: '',
                street: ''
            }
        }
    }),
    computed:{
        idUser(){
            return this.$route.params.id
        }
    },
    methods:{
        async action(callback){
            try{
                this.busy = true;
                this.error = false
                await callback()
                this.$store.dispatch('Message/AlertSuccess')
                this.busy = false
                return Promise.resolve(true)
            } catch (error){
                console.error(error)
                this.error = true
                this.busy = false
            }            
        },
        onSubmit(value){
            let user = JSON.parse(JSON.stringify(value))
            user['user'] = user.userName
            user['salary'] = parseInt(user.salary.toString().replace(/[^0-9]/g,''))
            if (this.updated) {
                this.onSubmitUpdated(user)
            } else {
                this.onSubmitNew(user)
            }
        },
        async onSubmitUpdated(user){
            this.action(async () =>{
                let id = this.idUser
                delete user['password']
                delete user['_id']
                await this.$store.dispatch('Users/updateUser',{ id, body: user })
            })
        },
        async onSubmitNew(newUser){
            try{
                newUser = {
                    ...newUser,
                    ...newUser.address
                }
                delete newUser['address']
                await this.action(async () =>{
                    await this.$store.dispatch('Users/createUser',newUser)
                })
                this.$router.push({ name: 'Dashboard' })
            } catch(error){

            }
        },
        async fetchUser(){
            const user = await this.$store.dispatch('Users/getUser',this.idUser)
            this.formatedData = {
                ...this.formatedData,
                ...user
            }
        }
    },
    components:{
        'ev-form-user': FormUser
    },
    beforeMount() {
        if(this.$route.name === "User"){
            this.updated = false
        } else{
            this.updated = true
            this.fetchUser()
        }
    }
}
</script>

<style>
.form-user{
    max-width: 800px;
    margin: auto;
}
</style>
