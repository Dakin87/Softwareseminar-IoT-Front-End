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
      <h3>Daten</h3>
      <draggable class="list-group" :list="list3" :group="{name: 'Daten', pull: 'clone', put: false}" @change="log">
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
      <h3>Gewünschte Daten</h3>
      <draggable class="list-group" :list="list7" group="Daten" @change="log">
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
    <v-spacer></v-spacer>

    <div class="col-12
    elevation-1"
    justify-center
    >
      <v-btn
      elevation="2"
      @click="clearAll"
    > Zurücksetzen
    </v-btn>
    
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
          { name: "Temperatur", id: 1, iconText: "mdi-thermometer"},
          { name: "Feuchtigkeit", id: 2, iconText: "mdi-water"},
          { name: "Bewegung", id: 3, iconText: "mdi-hand-wave"},
          { name: "Helligkeit", id: 4, iconText: "mdi-lightbulb-on"}
        ],
        list2: [
          { name: "Bluetooth", id: 5, iconText: "mdi-bluetooth-transfer"},
          { name: "WLAN", id: 6, iconText: "mdi-wifi"},
          { name: "Kabel", id: 7, iconText: "mdi-cable-data"},
          { name: "Mobilfunk", id: 7, iconText: "mdi-network-strength-3"}
        ],
        list3: [
          { name: "Cloud", id: 8, iconText: "mdi-cloud"},
          { name: "Lokal", id: 9, iconText: "mdi-server"},
          { name: "Gerät", id: 10, iconText: "mdi-package-variant"}
        ],
        list4: [
          { name: "Horst", id: 11, iconText: ""},
          { name: "Edgard", id: 12, iconText: ""},
          { name: "Johnson", id: 13, iconText: ""}
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
      }
    }
  };
</script>