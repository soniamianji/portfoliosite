<template>
  <v-app>
    <v-app-bar app flat extended>
      <v-toolbar-title class="logoStyle mt-12 pl-8">
        <v-btn text to="/" @click="$vuetify.goTo('#intro')" class="text-none"
          >Sonia Mianji</v-btn
        >
      </v-toolbar-title>

      <v-toolbar-items class="bodyFonts mx-auto mt-12">
        <v-btn
          text
          class="grey--text text--lighten"
          to="/"
          @click="$vuetify.goTo('#projects')"
          >Projects</v-btn
        >
        <v-btn
          text
          class="grey--text text--lighten"
          to="/"
          @click="$vuetify.goTo('#bio')"
          >Bio</v-btn
        >
      </v-toolbar-items>
      <template v-if="$vuetify.breakpoint.smAndUp" align="right">
        <v-btn
          class="mt-12 iconOpacity"
          icon
          href="https://github.com/soniamianji"
        >
          <i class="fab fa-github fa-2x"></i>
        </v-btn>
        <v-btn
          class="mt-12 iconOpacity"
          icon
          href="https://www.linkedin.com/in/sonia-mianji-johnsson-b8750258/"
        >
          <a href="https://github.com/soniamianji"></a>
          <i class="fab fa-linkedin-in fa-2x"></i>
        </v-btn>
        <v-btn
          class="mt-12 iconOpacity"
          icon
          href="mailto:soniamianji1@gmail.com "
        >
          <i class="fas fa-at fa-2x"></i>
        </v-btn>
      </template>
    </v-app-bar>

    <router-view />
    <v-footer>
      <v-row justify="center" class="bodyFonts" no-gutters>
        <p>Sonia Mianji -</p>
        &copy;
        {{ new Date().getFullYear() }}
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    track() {
      this.$ga.page("/");
    }
  }
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
.iconOpacity {
  opacity: 0.3;
}
.iconOpacity:hover {
  opacity: 1;
}
.v-btn:hover:before {
  background-color: transparent;
}

.v-btn:hover .v-btn__content {
  color: black;
}

.theme--light.v-btn--active::before {
  opacity: 0 !important;
}
</style>
