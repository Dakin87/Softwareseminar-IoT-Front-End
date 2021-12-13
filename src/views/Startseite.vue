<template>
  <div class="Startseite pa-6">

  <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="Apartment.jpg"
              height="125"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              Ihr Traumhaus:
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="persönlich.jpg"
              height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              persönlich,
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="Kind_Handy.jpg"
              max-height="125"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              einfach,
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="Touchpad.jpg"
              max-height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              smart !
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
  
  </div>

</template>

<script>
export default {
  name: 'Startseite'
}
</script>
