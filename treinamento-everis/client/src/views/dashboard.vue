<template>
    <div>
        <div class="row">
            <div v-for="(insight,i) of allInsights" :key="i" class="col-12 col-md-4 mb-3">
                <ev-dashboard-card :info="insight.data" :variant="insight.variant"/>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-7 dashboard__table">
                <ev-dashboard-table :list="formatedUserList"/>
            </div>
            <div class="col-12 col-md-5">
                <ev-dashboard-chart :chartData="dataCompanyChart"/>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardTable from '@/components/dashboard/fullTableDashboard'
import DashboardCard from '@/components/dashboard/card'
import DashboardChart from '@/components/charts/companyDoughnut'
import { mapGetters } from 'vuex';

export default {
    computed:{
        ...mapGetters('Dashboard',[
            'allInsights',
            'dataCompanyChart',
            'formatedUserList',
            'othersCompanies'
        ]),
    },
    components:{
        'ev-dashboard-table': DashboardTable,
        'ev-dashboard-card': DashboardCard,
        'ev-dashboard-chart': DashboardChart
    },
    mounted(){
        this.$store.dispatch('Users/getUsers')
    }
}
</script>

<style lang="scss">
.dashboard{
    
    @media (max-width: 765px) {
        &__table{
            margin-bottom: 1rem;
        }
    }
}
</style>
