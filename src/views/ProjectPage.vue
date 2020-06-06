<template>
  <v-content class="grey lighten-5">
    <v-container pa-5 class="customWidth">
      <v-row>
        <v-col cols="12" md="12">
          <v-expansion-panels v-model="panel">
            <v-expansion-panel class="elevation-0" v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="bodyFonts font-weight-black">
                {{title}}
                <template v-slot:header>
                  <v-icon color="teal">mdi-check</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="bodyFonts">Date: {{projectData.data.date}}</v-expansion-panel-content>

              <v-expansion-panel-content class="bodyFonts">{{projectData.data.content[1].parag}}</v-expansion-panel-content>

              <v-expansion-panel-content
                v-if="projectData.data.content[1].link.length > 0"
                class="bodyFonts"
              >
                <v-btn
                  v-for="link in projectData.data.content[1].link"
                  :key="link.index"
                  :href="link.url"
                  :style="{marginRight:'20px'}"
                  class="grey--text text--darken-1 text-none"
                  outlined
                >{{link.btnText}}</v-btn>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>

      <div>
        <v-row no-gutters>
          <v-col cols="12" v-for="items in projectData.data.content[0].src" :key="items">
            <a :href="projectData.data.content[1].link[0]">
              <v-img :src="items" class="grey lighten-2" height="100%" align="center"></v-img>
            </a>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-content>
</template>
  </v-content>
</template>

<script>
import projectData from "../rawDataProjects";
export default {
  data() {
    return {
      title: this.$route.params.title,
      projectData: "",
      panel: 0
    };
  },
  created() {
    for (var i = 0; i < projectData.length; i++) {
      if (this.title === projectData[i].title) {
        this.projectData = projectData[i];
      }
    }
    console.log(this.projectData.data.content[1].link);
    console.log(this.projectData.data.content[1].link[0].url);
  }
};
</script>

<style >
.customWidth {
  width: 100%;
}
.v-expansion-panels {
  box-shadow: none !important;
}
@media only screen and (min-width: 600px) {
  .customWidth {
    width: 60%;
  }
}
</style>