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
            elevation="4"
            color="primary" 
            outlined
            text to= '/config'>Jetzt Konfigurieren 
          </v-btn>
        </v-col>

        <v-col cols="12">    
          <v-card
          elevation="4"
          class="pa-6"
          >
           <h3>MySmartHome - Ihr Smarthome Konfigurator</h3>
           <p>
             <br>Smarte Geräte können ihren Nutzern das Leben in vielen Bereichen erleichtern. 
             Selbst Einsteigermodelle beherrschen Dinge wie das Steuern von Lichtern oder das Ein- und Ausschalten von Geräten für die Wohnzimmerunterhaltung. 
             Fortgeschrittene Systeme eignen sich darüber hinaus auch für die erweiterte Hausautomation.
             Bei uns erwartet Sie ein vielfältiges Sortiment an Smart Home Geräten. 
             Mit unseren energiesparenden Thermostaten können Sie so einfach wie noch nie ihre Heizkosten senken. 
             Sprachassistenten erlauben eine komfortable Steuerung Ihrer Beleuchtung, Rollläden oder Kaffeemaschinen. 
             <br>
             <br>
           </p>
           <p class="font-weight-bold">
            Was es beim Kauf der modernen Geräte zu beachten gilt:
           </p>
           <p> 
             Der Markt hält mittlerweile eine große Auswahl an Produkten für die smarte und preiswerte Haussteuerung bereit, weshalb es nicht einfach ist, auf Anhieb die richtige Lösung zu finden. 
             Angesichts der Vielzahl an Produkten ist es ratsam, sich Gedanken über die geplante Nutzung zu machen und die Geräte einem Preisvergleich zu unterziehen aber auch nachzusehen welche Geräte wie miteinander kombinierbar sind.
             Oft benötigen Bewohner eines Smarthomes mehrere Apps um alle Geräte steuern zu können, was die Nutzung oft kompliziert und umständlich macht.
             Mithilfe unseres Konfigurators können sie nun die Möglichkeiten ihres Zuhauses optimal auszunutzen und ihre perfekte Smarthome Lösung erstellen.
             Dabei können sie sehen, welche Kombinationen sich am besten für ihr Zuhause eignen beziehungsweise eher ungeeignet sind und alle Geräte über ein einziges Steuerungselement nutzen. 
             So kann sich jedermann seinen Traum vom eigenen Smarthome erfüllen - auch ohne viele verschiedene Steuerungselemente und technisches Vorwissen.
             <br>
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
