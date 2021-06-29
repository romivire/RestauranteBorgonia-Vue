<template>
    <a  class="btn-floating waves-effect waves-light brown  darken-2" @click="showCards()">
        <i class="material-icons" >arrow_back</i>
        </a>
</template>

<script>
export default {
    name: 'back-button',
    methods:{
        showCards(){
            this.$emit('show-cards')
        }
    }
}
</script>

<style scoped>
.btn-floating{
    margin:10px;
}
</style>