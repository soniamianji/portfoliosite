<template>
  <v-app>
    <v-app-bar app flat extended>
      <v-toolbar-title class="logoStyle mt-12">
        <span>Sonia Johnsson</span>
      </v-toolbar-title>

      <v-toolbar-items class="headerFonts mx-auto mt-12">
        <v-btn to="/" text class="grey--text text--lighten">Projects</v-btn>
        <v-btn to="/profile" class="grey--text text--lighten" text>Profile</v-btn>
        <v-btn to="/contact" class="grey--text text--lighten" text>Contact</v-btn>
      </v-toolbar-items>
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
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:300|Rubik:500&display=swap");
.logoStyle {
  font-family: "Rubik", sans-serif;
}
.headerFonts {
  font-family: "Open Sans", sans-serif;
}
.bodyFonts {
  font-family: "Open Sans Condensed", sans-serif;
}
</style>