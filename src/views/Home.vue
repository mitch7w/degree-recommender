<template>
  <div class="home">
    <h1>Tuks Degree Chooser</h1>
    <div class="card">
      <h3>Pick some words that describe you</h3>
      <BubbleText
        textInput="Introverted"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Extroverted"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Artistic"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Masochistic"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Good With People"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Good With Animals"
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
      <BubbleText
        textInput="Want To Be Rich"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Altruistic"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Creative"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Adventurous"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Practical"
        buttonColour="#4e9af1"
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
        textInput="Maths"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Technology and Electronics"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Humanities"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Animals"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Accounting"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Medicine"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Architecture and Building"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Languages"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Design"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Marketing"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Economics and Finance"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Health Sciences"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Hospitality and Tourism"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="International Relations"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Law and Criminology"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Marine Environment"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Social Work"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Education and Teaching"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Profession"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Agriculture"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Genetics"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Biology"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Chemistry"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Politics"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Management"
        buttonColour="#f14e4e"
        @tag-press="tagPressedEmitterReceived"
      />
      <BubbleText
        textInput="Music"
        buttonColour="#4e9af1"
        @tag-press="tagPressedEmitterReceived"
      />
      
    </div>
  </div>
  <BubbleText
    textInput="Find Degrees"
    buttonColour="black"
    v-on:click="findDegreePressed"
  />
  <!-- <BubbleText
    textInput="Add degrees to FB"
    buttonColour="black"
    v-on:click="pressToCreateDegree"
  /> -->
  <div class="results card">
    <h3>
      Based on your answers above you should have a look at the following
      degrees
    </h3>
    <h4>Click for more details</h4>
    <ListItem
      v-for="degree in degrees"
      :key="degree.degreeCode"
      v-bind:textInput="degree.degreeName"
      v-bind:degreeLink="degree.link"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import BubbleText from "@/components/BubbleText.vue";
import ListItem from "@/components/ListItem.vue";
import { createDegree } from "@/firebase.js";
import { getDegreeList } from "@/firebase.js";

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
      inOrderRelevancies: [],
    };
  },
  methods: {
    // giant method for adding a whole csv list of degrees
    // pressToCreateDegree() {
    //   createDegree();
    // },

    async findDegreePressed() {
      // do DB search for degrees with these tags and add to degrees tab with counters
      this.degrees=[] ; // clear results array
      // this.tags contains tags to search with
      const degreeQuery = await getDegreeList(this.tags); // FB call
      let degreeList = [] ;
      degreeQuery.forEach(doc => {
        degreeList.push(doc.data()) ;
      })
      // degreeList now has list of all possible degrees the user might be interested in
      let relevancy = []; // initialize counters
      for (var i = 0; i < degreeList.length; i++) {
        relevancy.push(0);
      }
      // now sum each degree's relevancy
      for (var i = 0; i < degreeList.length; i++) {
        this.tags.forEach(tag => {
          if (degreeList[i].tags.includes(tag)) {
            relevancy[i] = relevancy[i] + 1 ;
          } 
        }) ;
      }
      console.log(relevancy);
      console.log(degreeList);
      // find top 20 most relevant degrees
      for(var i = 0 ; i < 20 ; i++) {
        var maxRelevancy=-1;
        let indexMaxRelevancy =-1 ;
        // find next most relevant and pop it off
        for(var j = 0 ; j < degreeList.length ; j++) {
          if(relevancy[j] > maxRelevancy) {
            indexMaxRelevancy = j ;
            maxRelevancy = relevancy[j] ;
          }
      }
      this.degrees.push(degreeList[indexMaxRelevancy]) ; // add degrees in order of relevancy
      degreeList = degreeList.filter((degree => degree!== degreeList[indexMaxRelevancy])) ; // remove degree from degreeList when it's added to the sorted list
      relevancy.splice(indexMaxRelevancy,1) ;
      }
      // Display results card and render each degree in degrees
    },

    tagPressedEmitterReceived(tIn) {
      // add this tag to the tags array if it's not there already
      if (this.tags.includes(tIn)) {
        // remove it
        this.tags = this.tags.filter((tag) => tag !== tIn);
      } else {
        // add it
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
  margin: 1rem 6rem 2rem 6rem;
  background: #ffaa4c;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px;
}

.card:hover {
  transform: translateY(0.2rem);
}
</style>
