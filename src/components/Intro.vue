<template>
  <v-row justify="center" align="center" class="white customHeight pt-0">
    <v-col cols="12" sm="12" justify="center" align="center">
      <h1 class="headerFonts display-3">
        Hello! I am
        <v-scrollin :speed="80" :misses="3" class="font-weight-bold d-inline">Sonia.</v-scrollin>
      </h1>
      <h2 class="headerFonts grey--text pt-4">Web developer in the making.</h2>
      <h2 class="headerFonts grey--text">Check out my works!</h2>
    </v-col>
  </v-row>
</template>

<script>
import VScrollin from "vue-scrollin";
export default {
  components: {
    "v-scrollin": VScrollin
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.customHeight {
  height: 65vh;
}
</style>