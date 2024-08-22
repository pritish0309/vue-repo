<script>
  export default{
    data(){
      return {
        message : "this is some text"
      };
    },
    methods:{
      receiveEmit(){
        alert('clicked')
      }
    }
  }
</script>

<template>
  <h1>{{message}}</h1>
  <food-item food-name="Apples" food-desc="Apples are a type of fruit that grow on trees." v-bind:is-True="true" @toggle-Me="receiveEmit"/>
  <food-item food-name="Banana" food-desc="Banana are a type of fruit that grow on trees." v-bind:is-True="false"/>
</template>

<style>
  #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
    color:#000;
  }
  #app > div:hover{
    cursor:pointer;
    background-color: green;
  }
</style>
