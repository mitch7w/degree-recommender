<template>
  <a
    v-bind:style="{ background: (isPress ? 'black' : '#FF4C29'),borderColor: (isPress? 'rgba(255, 255, 255, 1)' : 'transparent' ) }"
    v-on:click="tagPressed(textInput)"
    class="button4"
    >{{ textInput }}</a
  >
</template>

<script>
export default {
  name: "BubbleText",
  props: {
    textInput: String,
    buttonColour: String,
  },
  methods: {
    tagPressed(tIn) {
      this.$emit("tag-press", tIn); // event emitter
      this.isPress = !this.isPress;
    },
  },
  data() {
    return {
      isPress: false,
    };
  },
};
</script>

<style scoped>
a.button4 {
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0.3em 0.1em 0.3em 0.2em;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: white;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
}
a.button4:hover {
  border-color: rgba(255, 255, 255, 1);
  cursor: pointer ;
}

</style>