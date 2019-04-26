<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/dashboard">Everis CRM System</router-link>
        <button class="navbar-toggler collapsed" type="button" @click="$refs.navs.classList.toggle('show')">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse justify-content-md-center collapse" ref="navs">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/user">Create User</router-link>
                </li>
            </ul>

            <ul class="navbar-nav userOptions">
                <li class="nav-item dropdown userOptions__button">
                    <a class="nav-link dropdown-toggle" href="#" @click="$refs.userOptions.classList.toggle('show')">My User</a>
                    <div class="dropdown-menu userOptions__options" ref="userOptions">
                        <router-link class="dropdown-item" to="/logout">Logout</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import HamburgerIcon from '@/components/globals/hamburger.vue'
export default {
    components:{
        'ev-hamburger-icon': HamburgerIcon
    },
    watch: {
        '$route'(newValue){
            this.$refs.userOptions.classList.remove('show')
            this.$refs.navs.classList.remove('show')
        }
    },
}
</script>

<style lang="scss">
@import "@/scss/index.scss";

.navbar{
    background: $primary;
    background: linear-gradient(to right, $primary, $second);
}

.userOptions{
    &__options{
        right: 0;
        left: auto;
        overflow: hidden;
    }
}
</style>
