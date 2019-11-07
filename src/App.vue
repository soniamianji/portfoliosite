<template>
  <v-app>
    <v-app-bar app flat extended>
      <v-toolbar-title class="logoStyle mt-12 pl-8">
        <span>Sonia Johnsson</span>
      </v-toolbar-title>

      <v-toolbar-items class="bodyFonts mx-auto mt-12">
        <v-btn to="/" text active-class="grey lighten-5" class="grey--text text--lighten">Projects</v-btn>
        <v-btn to="/profile" text class="grey--text text--lighten">Bio</v-btn>
      </v-toolbar-items>
      <template v-if="$vuetify.breakpoint.smAndUp" aligh="right">
        <v-btn class="mt-12" text href="https://github.com/soniamianji">
          <v-img src="./assets/github.png" aspect-ratio="1" class max-width="35" max-height="35"></v-img>
        </v-btn>
        <v-btn
          class="mt-12"
          text
          href="https://www.linkedin.com/in/sonia-mianji-johnsson-b8750258/"
        >
          <a href="https://github.com/soniamianji"></a>
          <v-img src="./assets/linkedin.png" aspect-ratio="1" class max-width="35" max-height="35"></v-img>
        </v-btn>
        <v-btn class="mt-12" text href="mailto:soniamianji1@gmail.com ">
          <v-img src="./assets/gmail.png" aspect-ratio="1" max-width="35" max-height="35"></v-img>
        </v-btn>
      </template>
    </v-app-bar>

    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Karla:700|Raleway|Roboto+Slab:100&display=swap");
.logoStyle {
  font-family: "karla", sans-serif !important;
}
.headerFonts {
  font-family: "Roboto Slab", serif;
}
.bodyFonts {
  font-family: "Raleway", sans-serif;
}
</style>