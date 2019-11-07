<template>
  <v-content class="grey lighten-5">
    <Intro />
    <v-row class="mb-6 pt-5" justify="center">
      <v-col cols="12" sm="6" class v-for="item in data" :key="item.index">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
            <v-img
              :src="item.image"
              class="grey lighten-2"
              aspect-ratio="2"
              max-height="300"
              align="center"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out grey lighten-3 v-card--reveal headersFont grey--text text--darken-1"
                  style="height: 100%;"
                  :to="'/' + item.title"
                >
                  <router-link
                    class="grey--text text--darken-1"
                    :to="'/' + item.title"
                  >{{ item.title }}</router-link>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import Data from "../rawadata";
import Intro from "../components/Intro";
export default {
  name: "home",
  components: { Intro },
  data() {
    return {
      data: Data
    };
  },
  created() {
    console.log(this.data.length);
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