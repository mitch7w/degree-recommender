<template>
  <div class="home">
    <h1>SA Degree Chooser</h1>
    <div class="card">
      <h3>Pick some words that describe you</h3>
      <BubbleText
        textInput="Introverted"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Artistic"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Machochistic"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Good with people"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Outdoorsy"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Patient"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
    </div>
    <div class="card">
      <h3>Pick some topics that you are interested in</h3>
      <BubbleText
        textInput="Science"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="History"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="People"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Engineering"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Art"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Technology"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
    </div>
  </div>
  <BubbleText
    textInput="Find Degrees"
    buttonColour="black"
    v-on:click="findDegreePressed"
  />
  <div class="results card">
    <h3>
      Based on your answers above you should have a look at the following
      degrees
    </h3>
    <ListItem
      v-for="degree in degrees"
      :key="degree.programNum"
      v-bind:textInput="degree.name"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import BubbleText from "@/components/BubbleText.vue";
import ListItem from "@/components/ListItem.vue";
import { createDegree } from "@/firebase.js";

export default {
  name: "Home",
  components: {
    BubbleText,
    ListItem,
  },
  data() {
    return {
      degrees: [], // to be populated later by Firebase query
      tags: [], // populated when each tag button pressed
    };
  },
  methods: {
    // giant method for adding a whole csv list of degrees
    // pressToCreateDegree() {
    //   const degrees = [] ; // list of degrees
    //   degrees.forEach(degree => createDegree(degree));
    // }
    findDegreePressed() {
      // do DB search for degrees with these tags and add to degrees tab with counters
      // this.tags contains tags to search with

      // when done display results card
    },

    tagPressedEmitterReceived(tIn) {
      // add this tag to the tags array if it's not there already
      if (this.tags.includes(tIn)) { // remove it
        this.tags = this.tags.filter(tag => tag !== tIn) ;
      }
      else { // add it
        this.tags.push(tIn);
      }
    console.log(this.tags);
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Ultra", serif;
  font-size: 4rem;
}
.card {
  border-radius: 15px;
  padding: 0.5rem;
  margin: 1.5rem;
  background: #ffaa4c;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px;
}

.card:hover {
  transform: translateY(0.2rem);
}
</style>
