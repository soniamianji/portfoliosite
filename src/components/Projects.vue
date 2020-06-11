<template>
  <v-container class="mb-6 pt-5">
    <v-row class="mb-6 pt-5" justify="center">
      <v-col cols="12" sm="6" class v-for="item in data" :key="item.index">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
            <v-img
              :src="item.image"
              :lazy-src="item.image"
              class="grey lighten-2"
              aspect-ratio="2"
              max-height="300"
              align="center"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out grey lighten-3 v-card--reveal headersFont grey--text text--darken-1 text-decor"
                  style="height: 100%;"
                  :to="'/' + item.title"
                >
                  <v-btn
                    class="grey--text text--darken-4 text-none"
                    text
                    :to="'/' + item.title"
                  >{{ item.title }}</v-btn>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Data from "../rawadata";
export default {
  data() {
    return {
      data: Data
    };
  }
};
</script>
<style scoped>
.text-decor {
  text-decoration: none !important;
}
</style>