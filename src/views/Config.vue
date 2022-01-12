<template>
  
  <div class="row 
    px-5 py-3 mx-10 my-5 justify-center
    elevation-5
    ">
    
    <div class="col-3
    elevation-1"
    >
      <h3>Sensoren</h3>
      <draggable class="list-group" :list="list1" :group="{name: 'Sensoren', pull: 'clone', put: false}" @change="log">
        <v-chip
          class="ma-2 list-group-item"
          v-for="(element) in list1"
          :key="element.name"
          label
        >
          {{ element.name }}
          <v-icon right color="primary">
            {{element.iconText}}
          </v-icon>
        </v-chip>
      </draggable>
    </div>

    <div class="col-3
    elevation-1
    ">
      <h3>Interaktion</h3>
      <draggable class="list-group" :list="list2" :group="{name: 'Interaktion', pull: 'clone', put: false}" @change="log">
        <v-chip
          class="ma-2 list-group-item"
          v-for="(element) in list2"
          :key="element.name"
          label
        >
          {{ element.name }}
          <v-icon right color="primary">
            {{element.iconText}}
          </v-icon>
        </v-chip>
      </draggable>
    </div>

    <div class="col-3
    elevation-1
    ">
      <h3>Steuerung</h3>
      <draggable class="list-group" :list="list3" :group="{name: 'Steuerung', pull: 'clone', put: false}" @change="log">
        <v-chip
          class="ma-2 list-group-item"
          v-for="(element) in list3"
          :key="element.name"
          label
        >
          {{ element.name }}
          <v-icon right color="primary">
            {{element.iconText}}
          </v-icon>
        </v-chip>
      </draggable>
    </div>

    <div class="col-3
    elevation-1
    ">
      <h3>Plattform</h3>
      <draggable class="list-group" :list="list4" :group="{name: 'Plattform', pull: 'clone', put: false}" @change="log">
        <v-chip
          class="ma-2 list-group-item"
          v-for="(element) in list4"
          :key="element.name"
          label
        >
          {{ element.name }}
          <v-icon right color="primary">
            {{element.iconText}}
          </v-icon>
        </v-chip>
      </draggable>
    </div>

    
    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />

    <rawDisplayer class="col-3" :value="list3" title="List 3" />

    <rawDisplayer class="col-3" :value="list4" title="List 4" />

  <div class="col-3
    elevation-1"
    >
      <h3>Gewünschte Sensoren</h3>
      <draggable class="list-group" :list="list5" group="Sensoren" @change="log">
        <v-chip
          class="ma-2 list-group-item"
          v-for="(element) in list5"
          :key="element.name"
          @click="removeAt(list5, element)"
          label
        >
          {{ element.name }}
          <v-icon right color="primary">
            {{element.iconText}}
          </v-icon>
        </v-chip>
      </draggable>
    </div>

    <div class="col-3
    elevation-1"
    >
      <h3>Gewünschte Interaktion</h3>
      <draggable class="list-group" :list="list6" group="Interaktion" @change="log">
        <v-chip
          class="ma-2 list-group-item"
          v-for="(element) in list6"
          :key="element.name"
          @click="removeAt(list6, element)"
          label
        >
          {{ element.name }}
          <v-icon right color="primary">
            {{element.iconText}}
          </v-icon>
        </v-chip>
      </draggable>
    </div>

    <div class="col-3
    elevation-1"
    >
      <h3>Gewünschte Steuerung</h3>
      <draggable class="list-group" :list="list7" group="Steuerung" @change="log">
        <v-chip
          class="ma-2 list-group-item"
          v-for="(element) in list7"
          :key="element.name"
          @click="removeAt(list7, element)"
          label
        >
          {{ element.name }}
          <v-icon right color="primary">
            {{element.iconText}}
          </v-icon>
        </v-chip>
      </draggable>
    </div>

    <div class="col-3
    elevation-1"
    >
      <h3>Gewünschte Plattform</h3>
      <draggable class="list-group" :list="list8" group="Plattform" @change="log">
        <v-chip
          class="ma-2 list-group-item"
          v-for="(element) in list8"
          :key="element.name"
          @click="removeAt(list8, element)"
          label
        >
          {{ element.name }}
          <v-icon right>
            {{element.iconText}}
          </v-icon>
        </v-chip>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list5" title="List 5" />
   

    <div class="col-12"
    justify-center
    >
      <v-btn
      elevation="2"
      @click="clearAll"
      > 
      Zurücksetzen
      </v-btn>
    
    </div>
    
    <v-spacer></v-spacer>

    <div class="col-12
    elevation-1
    justify-right"
    > 

      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h3>Kostenvoranschlag</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-simple-table style="width:500px">
              <thead>
                <tr>
                  <th class="text-left">
                    Komponente
                  </th>
                  <th class="text-left" style="width:1%">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody class="100">
                <tr>
                  <td>Sensoren</td>
                  <td class="text-right">{{calculateSensors()}}€</td>
                </tr>
                <tr>
                <tr>
                  <td>Interaktionen</td>
                  <td class="text-right">{{calculateInteractions()}}€</td>
                </tr>
                <tr>
                  <td>Steuerung</td>
                  <td class="text-right">{{calculateControl()}}€</td>
                </tr>
                <tr>
                <tr>
                  <td>Plattform</td>
                  <td class="text-right">{{calculatePlatform()}}€</td>
                </tr>
                <tr>
                  <td><b>Summe</b></td>
                  <td class="text-right"><b>{{calculateTotal()}}€</b></td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      

    </div>

  </div>
</template>


<script>
  import draggable from "vuedraggable";
  export default {
    name: "IoT-Config",
    display: "IoT Konfigurator",
    order: 1,
    components: {
      draggable
    },
    data() {
      return {
        list1: [
          { name: "Temperatur", id: 1, iconText: "mdi-thermometer", price: 20.00},
          { name: "Feuchtigkeit", id: 2, iconText: "mdi-water", price: 20.00},
          { name: "Bewegung", id: 3, iconText: "mdi-hand-wave", price: 20.00},
          { name: "Helligkeit", id: 4, iconText: "mdi-lightbulb-on", price: 20.00}
        ],
        list2: [
          { name: "Bluetooth", id: 5, iconText: "mdi-bluetooth-transfer", price: 20.00},
          { name: "WLAN", id: 6, iconText: "mdi-wifi", price: 20.00},
          { name: "Kabel", id: 7, iconText: "mdi-cable-data", price: 20.00},
          { name: "Mobilfunk", id: 7, iconText: "mdi-network-strength-3", price: 20.00}
        ],
        list3: [
          { name: "Automatisiert", id: 8, iconText: "mdi-cog", price: 20.00},
          { name: "Sprachsteuerung", id: 9, iconText: "mdi-microphone", price: 20.00},
          { name: "Control Hub", id: 10, iconText: "mdi-tablet", price: 20.00},
          { name: "Mobiles Endgerät", id: 10, iconText: "mdi-cellphone", price: 20.00}
        ],
        list4: [
          { name: "IFTTT", id: 11, iconText: "", price: 0.00},
          { name: "Conrad Connect", id: 12, iconText: "", price: 0.00},
          { name: "iHaus", id: 13, iconText: "", price: 89.00},
          { name: "Homee", id: 14, iconText: "", price: 112.00},
          { name: "Qivicon", id: 15, iconText: "", price: 20.00}
        ],
        list5: [
        
        ],
        list6: [
        
        ],
        list7: [
        
        ],
        list8: [
        
        ]
      };
    },
    methods: {
      add: function() {
        this.list.push({ name: "Juan" });
      },
      replace: function() {
        this.list = [{ name: "Edgard" }];
      },
      clone: function(el) {
        return {
          name: el.name + " cloned"
        };
      },
      log: function(evt) {
        window.console.log(evt);
      },
      checkMove: function(evt) {
        if (evt.relatedContext.list.length>3){
				return false
			}
      },
      removeAt: function(list, index) {
        list.splice(index, 1);
      },
      clearAll: function(){
        this.$data.list5 = [];
        this.$data.list6 = [];
        this.$data.list7 = [];
        this.$data.list8 = [];
      },
      calculateSensors: function(){
        let sum = 0.00;
        for(let i = 0; i < this.list5.length; i++){
          sum += (parseFloat(this.list5[i].price));
          }

        return sum;
      },
      calculateInteractions: function(){
        let sum = 0;
        for(let i = 0; i < this.list6.length; i++){
          sum += (parseFloat(this.list6[i].price));
          }

        return sum;
      },
      calculateControl: function(){
        let sum = 0;
        for(let i = 0; i < this.list7.length; i++){
          sum += (parseFloat(this.list7[i].price));
          }

        return sum;
      },
      calculatePlatform: function(){
        let sum = 0;
        for(let i = 0; i < this.list8.length; i++){
          sum += (parseFloat(this.list8[i].price));
          }

        return sum;
      },
      calculateTotal: function(){
        var total = this.calculateSensors() + this.calculateInteractions()+ this.calculateControl()+ this.calculatePlatform();
        return total;
      }
    }
  };
</script>