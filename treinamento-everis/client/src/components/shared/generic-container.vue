<template>
    <div class="card border rounded ev-container">
        <div class="card-body">
            <slot/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ev-container{
    background-color: #fff;
    box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 200ms all;
    &:hover{
        box-shadow: 0 0 25px -5px #9e9c9e;
    }
}
</style>

