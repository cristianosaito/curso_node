<template>
    <ev-container :class="variant">
            <h6><b>{{ info.title }}</b></h6>
            <h2 class="d-flex mt-3 mb-3">
                <i class="fas fa-users mr-auto"></i>
                <span>{{ info.mainData }}</span>
            </h2>
            <p class="d-flex card__footer-info">
                <span class="mr-auto">
                    {{ info.footerTitle }}
                </span> 
                <span><b>{{ info.footerData }}</b></span>
            </p>
    </ev-container>
</template>

<script>
export default {
    props:{
        variant:{
            type: String,
            validator(val){
                return ['blue','green','pink'].indexOf(val) !== -1
            }
        },
        info:{
            type: Object,
            required: true
        }
    }

}
</script>

<style lang="scss" scoped>
.card{
    height: 100%;
    color: #fff;
    background: linear-gradient(45deg, #9E9E9E, #e0e0e0);
    &.blue{
        background: linear-gradient(45deg, #4099ff, #73b4ff);
    }

   &.green{
        background: linear-gradient(45deg, #2ed8b6, #59e0c5);
   }

   &.pink{
       background: linear-gradient(45deg, #FF5370, #ff869a);
   }

    &__footer-info{
        flex-flow: row wrap;
        span{
            white-space: nowrap;
        }
    }
}
</style>
