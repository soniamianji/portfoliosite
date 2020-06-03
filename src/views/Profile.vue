<template>
  <v-content class="grey lighten-5">
    <v-container class="customWidth pa-5 mx-auto">
      <v-row>
        <v-col cols="12" md="6">
          <div class="pa-8">
            <h2 class="headerFonts pb-6">About Me</h2>
            <p
              class="bodyFonts grey--text text--lighten"
            >My name is Sonia Mianji Johnsson. I am born in 91 and I currently reside in Jönköping Sweden where I am enrolled in New Media Design at Jönköping University.</p>
            <p
              class="bodyFonts grey--text text--lighten"
            >As the name might suggest its an interdisciplinary education where I am acquiring skill sets ranging from project management, brand development, graphic design, motion graphics, UX-design with an emphasis on programming and web development. I am very tenacious in my pursuit of knowledge. Programming and web-development is my primary focus and interest. I am a good team player and as such I aspire to one day assemble my own brilliant team of highly skilled codemonkeys and together we will make it our business to improve the human experience by one line of code at the time.</p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" align="center" justify="center">
          <div class="pa-8">
            <v-img
              src="../assets/soniapic.png"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="350"
              max-height="350"
            ></v-img>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <div class="pa-8">
            <h3 class="headerFonts pb-6">Skillsets</h3>
            <h5 class="headerFonts">UX and Prototyping tools</h5>
            <p class="bodyFonts grey--text text--lighten">XD, Figma, Sketch</p>

            <h5 class="headerFonts">Graphics and motion graphics</h5>
            <p
              class="bodyFonts grey--text text--lighten"
            >Adobe PhotoShop, Illustrator, InDesign, Premiere, AfterEffect.</p>

            <h5 class="headerFonts">Languages</h5>
            <p
              class="bodyFonts grey--text text--lighten"
            >PHP, JavaScript, Typescript, HTML / CSS / SASS.</p>

            <h5 class="headerFonts">DBs</h5>
            <p class="bodyFonts grey--text text--lighten">MongoDB, Mysql, SQL, Sqlite3</p>

            <h5 class="headerFonts">Frameworks, SSE´s and Libs</h5>
            <p
              class="bodyFonts grey--text text--lighten"
            >NodeJS. Express.js, React.js, Redux, Bootstrap, Wordpress, Phaser, Vue.js</p>

            <h5 class="headerFonts">Versioning tools</h5>
            <p class="bodyFonts grey--text text--lighten">GIT</p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" justify="center">
          <div class="pa-8">
            <h3 class="headerFonts pb-6">Find me</h3>
            <h4 class="headerFonts">Kungsladugårdsgatan 94</h4>
            <h4 class="headerFonts">41 476 Göteborg Sweden</h4>
          </div>
          <div class="pa-8">
            <h4 class="headerFonts" href="mailto:soniamianji1@gmail.com">soniamianji1@gmail.com</h4>
            <h4 class="headerFonts grey--text">+46 729245158</h4>
            <div class="pt-8" width="50%">
              <v-row>
                <v-col cols="3">
                  <v-btn text href="https://github.com/soniamianji">
                    <v-img
                      src="../assets/github.png"
                      aspect-ratio="1"
                      max-width="35"
                      max-height="35"
                    ></v-img>
                  </v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn text href="https://www.linkedin.com/in/sonia-mianji-johnsson-b8750258/">
                    <v-img
                      src="../assets/linkedin.png"
                      aspect-ratio="1"
                      class
                      max-width="35"
                      max-height="35"
                    ></v-img>
                  </v-btn>
                </v-col>
                <v-col cols="3">
                  <v-btn text href="mailto:soniamianji1@gmail.com">
                    <v-img
                      src="../assets/gmail.png"
                      aspect-ratio="1"
                      max-width="35"
                      max-height="35"
                    ></v-img>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>


