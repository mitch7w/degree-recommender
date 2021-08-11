<template>
<a v-bind:href="degreeLink">
<div class="item" >{{ textInput }}</div>
</a>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    textInput: String,
    degreeLink: String,
  },
};
</script>

<style scoped>
    .item {
    border-radius: 15px;
    padding: 0.5rem;
    margin: 0 8rem 1rem 8rem;
    background: white;
    transition: 0.4s ease-out;
    box-shadow: 0px 7px 10px;
    }

    a {
      text-decoration : none; 
      color: inherit;
    }
</style>