<template>
  <v-row justify="center" align="center" class="white customHeight pt-0">
    <v-col cols="12" sm="12" justify="center" align="center">
      <h1 class="headerFonts display-3">
        Hello! I am
        <span class="font-weight-bold">Sonia</span>
      </h1>
      <h2 class="headerFonts grey--text pt-4">
        <v-scrollin :speed="30" :misses="2">Full stack developer in the making.</v-scrollin>
      </h2>
      <h2 class="headerFonts grey--text">
        <v-scrollin :speed="50" :misses="3">Check out my works!</v-scrollin>
      </h2>
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