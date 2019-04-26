<template>
    <div>
        <input id="menu-hamburguer" type="checkbox">

        <label for="menu-hamburguer">
            <div class="menu">
                <span class="hamburguer"></span>
            </div>
        </label>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .hamburguer {
    position: relative;
    display: block;
    background: #000;
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: .5s ease-in-out;
}

.hamburguer:before,
.hamburguer:after {
    background: #000;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: .5s ease-in-out;
}

.hamburguer:before {
    top: -10px;
}

.hamburguer:after {
    bottom: -10px;
}

input {
    display: none;
}

input:checked ~ label .hamburguer {
    transform: rotate(45deg);
}

input:checked ~ label .hamburguer:before {
    transform: rotate(90deg);
    top: 0;
}

input:checked ~ label .hamburguer:after {
    transform: rotate(90deg);
    bottom: 0;
}
</style>
