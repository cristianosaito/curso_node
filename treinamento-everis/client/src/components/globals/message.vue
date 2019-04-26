<template>
    <div :class="`container ${active ? 'mt-2' : ''}`">
        <div :class="definitions" role="alert">
            <b>{{ message }}</b>
            <button type="button" @click="dismissed" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed:{
        ...mapState('Message',[
            'active', 
            'variation', 
            'message'
        ]),
        definitions(){
            const variation = `alert-${this.variation || 'primary'}`
            const areShowing = this.active ? 'show' : 'hidden'
            return `alert ${variation} alert-dismissible text-center ${areShowing}`
        }
    },
    methods:{
        ...mapActions('Message',['dismissed']),
    },
}
</script>

<style scoped>
.close{    
    top: 50%;
    transform: translateY(-50%);
}

.hidden{
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
    opacity: 0;
    visibility: hidden;
}
</style>
