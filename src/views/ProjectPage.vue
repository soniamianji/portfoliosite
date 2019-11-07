<template>
  <v-content class="grey lighten-5">
    <v-container pa-5 class="customWidth">
      <v-row>
        <v-col cols="12" md="6">
          <h3 class="headerFonts pl-8">{{title}}</h3>
        </v-col>
        <v-col cols="12" md="6" class="headerFonts">
          <v-expansion-panels>
            <v-expansion-panel class="elevation-0" v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header>
                Project Details
                <template v-slot:header>
                  <v-icon color="teal">mdi-check</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels>
            <v-expansion-panel class="elevation-0">
              <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                <template v-slot:header>
                  <div>Item</div>
                </template>
                <v-card>
                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>

      <div>
        <v-row no-gutters>
          <v-col cols="12" v-for="items in projectData.data.content[0].src" :key="items">
            <v-img :src="items" class="grey lighten-2" height="100%" align="center"></v-img>
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
      projectData: ""
    };
  },
  created() {
    for (var i = 0; i < projectData.length; i++) {
      if (this.title === projectData[i].title) {
        this.projectData = projectData[i];
      }
    }
    console.log(this.projectData.data.content[0].src);
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