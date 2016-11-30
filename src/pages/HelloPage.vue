<template>
    <div>
        <h1>{{msg}}</h1>
        <div>counter is {{count}}</div>
        <button class="btn btn-info" @click="increment">Add</button>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                count: 0
            }
        },
        methods: {
            increment(){
                this.count++;
            }
        }
    }
</script>
