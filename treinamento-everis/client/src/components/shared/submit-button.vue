<template>
    <button @click="$emit('onClick')" :class="computedClass" type="submit">
        <div class="spinner-grow text-light" role="status" v-if="busy">
            <span class="sr-only">Loading</span>
        </div>
        {{ message }}
    </button>
</template>

<script>
export default {
    props:{
        busy:{
            type: Boolean
        },
        disabled:{
            type: Boolean
        },
        message: {
            type: String
        },
        variation:{
            type: String,
            default: 'primary',
            validator(value){
                return [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                    'link'].indexOf(value) !== -1
            }
        }
    },
    computed:{
        computedClass(){
            const disabled = this.busy ? 'disabled': ''
            return `btn btn-lg btn-${this.variation} btn-block mt-3 ${disabled} d-flex align-items-center justify-content-center`
        }
    }

}
</script>

<style>

</style>
