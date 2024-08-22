<script>
    export default{
        data(){
            return{
                name: "Pritish",
                message: "I like apples",
                count: 0
            }
        },
        methods:{
            countClicks(){
                this.count++;
            },
            toogleClick(){
                this.$emit('toggle-Me')
            }
        },
        props:{
            foodName : {
                type: String,
                required: true,
            },
            foodDesc : {
                type: String,
                required: false,
                default : "this is the food description"
            }, 
            isTrue : {
                type: Boolean,
                required: false,
                default : "this is the Boolean value"
            }
        }
    };
</script>

<template>
    <div v-on:click="countClicks">
        {{foodName}}
        {{foodDesc}}
        <h2 v-show="isTrue">{{isTrue}}</h2>
    </div>
</template>


<style>
</style>