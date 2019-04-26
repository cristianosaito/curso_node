<template>
    <ev-table :items="list" @onEdit="edit" @onDel="del" :fields="fields"/>
</template>

<script>
import DashboardTable from '@/components/tables/dashboard'
import { mapGetters } from 'vuex';

export default {
    props:{
        list:{
            required: true,
            default: () => []
        }
    },
    computed:{
        ...mapGetters('Auth',['getUser']),
        fields(){
            return [ 
                { key: 'actions', label: 'Actions' },
                { key: 'name', sortable: true },
                { key: 'userName', sortable: true },
                { key: 'salary', sortable: true,
                    formatter: (val) => this.currency(val) 
                },
                { key: 'company', sortable: true },
            ]
        },
    },
    methods:{
        currency(val = ''){
            return  val ? val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") : ''
        },
        edit({ _id }){
            this.$router.push({ name: 'UpdateUser', params: { id: _id } })
        },
        async del({ _id }){
            try{
                await this.$store.dispatch('Users/deleteUser',_id)
                await this.$store.dispatch('Message/AlertSuccess')
            } catch(error){
                console.error(error)
            }
        }
    },
    components:{
        'ev-table': DashboardTable
    },
}
</script>

<style>

</style>
