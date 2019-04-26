<template>
    <div class="d-flex align-items-center justify-content-center text-center login">
        <form class="form-signin" @submit.prevent="login">
            <img class="mb-4" src="https://www.inova.unicamp.br/wp-content/uploads/2016/11/Logo_everis.jpg" alt="" width="150" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
            <label for="inputuser" class="sr-only">User</label>
            <input v-model="form.user" type="user" autocomplete="false" id="inputuser" class="form-control" placeholder="Username" required="" autofocus="">
            
            <label for="inputPassword" class="sr-only">Senha</label>
            <input v-model="form.password" type="password" id="inputPassword" class="form-control mt-2" placeholder="Password" required="">
            
            <button :class="['btn btn-lg btn-primary btn-block mt-3 d-flex align-items-center justify-content-center',{ disabled: busy }]" type="submit">
                <div class="spinner-grow text-light" role="status" v-if="busy">
                    <span class="sr-only">Loading</span>
                </div>
                {{ msgButton }}
            </button>
            <p class="mt-5 mb-3 text-muted">© 2019</p>
        </form>
    </div>
</template>

<script>
import { Auth } from '@/services/api'
export default {
    data: () => ({
        busy: false,
        auth: false,
        form: {
            user: '',
            password: ''
        }
    }),
    computed:{
        msgButton(){
            if (this.auth) { return 'Redirecting ...' }
            if (this.busy) { return 'Loading ...' }
            return 'Enter'
        }
    },
    methods:{
        async login(){
            try {
                this.$store.dispatch('Message/dismissed')
                this.busy = true
                await this.$store.dispatch('Auth/Login',this.form)
                this.auth = true

                this.$swal.fire({
                    title: 'Welcome',
                    type: 'success',
                    timer: '2000'
                })

                setTimeout(() =>{
                    this.$router.push({ name: 'Dashboard' })
                }, 2000)
            } catch (error) {
                this.busy = false
            }
        }
    }
}
</script>

<style lang="scss">
.login{
    height: 90vh;
}
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
</style>
