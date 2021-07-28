<template>
<div class="item">{{ textInput }}</div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    textInput: String,
  },
};
</script>

<style scoped>
    .item {
    border-radius: 15px;
    padding: 0.5rem;
    margin: 1.5rem;
    background: white;
    transition: 0.4s ease-out;
    box-shadow: 0px 7px 10px;
    }
</style>