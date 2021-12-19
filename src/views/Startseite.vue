<template>
  <div class="Startseite pa-6">

  <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row flex>
        <v-col cols="3">
          <v-card
            width="600"
          >
            <v-img
              src="Apartment.jpg"
              height="300"
              width="600"
            ></v-img>
            <v-card-title class="text-h6">
              Ihr Traumhaus:
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card
            width="600"
          >
            <v-img
              src="persönlich2.jpg"
              height="300"
              width="600"
            ></v-img>
            <v-card-title class="text-h6">
              persönlich
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card
            width="600"
          >
            <v-img
              src="Kind_Handy.jpg"
              height="300"
              width="600"
            ></v-img>
            <v-card-title class="text-h6">
              einfach
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card
            width="600"
          >
            <v-img
              src="Touchpad.jpg"
              height="300"
              width="600"
            ></v-img>
            <v-card-title class="text-h6">
              smart
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12">    
          <v-btn
           block
            elevation="14"
            color="primary" 
            outlined
            text to= '/config'>Jetzt Konfigurieren</v-btn>
        </v-col>

        <v-col cols="12">    
          <v-card>
           <p>
             Test Zeile 1
             <br>
             Test Zeile 2
             </p>
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
