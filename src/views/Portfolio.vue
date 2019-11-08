<template>
  <v-content class="grey lighten-5">
    <Intro id="intro" />
    <Projects id="projects" />
    <Bio id="bio" />
  </v-content>
</template>

<script>
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Bio from "../components/Bio";
export default {
  name: "portfolio",
  components: { Intro, Bio, Projects },
  data() {
    return {};
  },
  methods: {
    onScroll(e) {
      console.log("hi");
    }
  }
};
</script>
<style>
.v-card--reveal {
  text-decoration: underline;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
.customColor {
  text-decoration: none;
  color: grey;
}
</style>