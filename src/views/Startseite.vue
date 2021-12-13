<template>
  <div class="Startseite pa-6">

  <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col auto>
          <v-card
            max-width="300"
          >
            <v-img
              src="Apartment.jpg"
              max-height="140"
              max-width="300"
            ></v-img>
            <v-card-title class="text-h6">
              Ihr Traumhaus:
            </v-card-title>
          </v-card>
        </v-col>

        <v-col auto>
          <v-card
            max-width="300"
          >
            <v-img
              src="persönlich2.jpg"
              max-height="140"
              max-width="300"
            ></v-img>
            <v-card-title class="text-h6">
              persönlich,
            </v-card-title>
          </v-card>
        </v-col>

        <v-col auto>
          <v-card
            max-width="300"
          >
            <v-img
              src="Kind_Handy.jpg"
              max-height="140"
              max-width="300"
            ></v-img>
            <v-card-title class="text-h6">
              einfach,
            </v-card-title>
          </v-card>
        </v-col>

        <v-col auto>
          <v-card
            max-width="300"
          >
            <v-img
              src="Touchpad.jpg"
              max-height="140"
              max-width="300"
            ></v-img>
            <v-card-title class="text-h6">
              smart !
            </v-card-title>
          </v-card>
        </v-col>

          <v-btn
           block
           elevation="14"
           fab
           tile
           color="primary"
           text to= '/login'>Jetzt Konfigurieren</v-btn>

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
