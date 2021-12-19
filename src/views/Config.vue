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
          {{ element.name }} ID:{{element.id}}
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
          {{ element.name }} ID:{{element.id}}
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
          {{ element.name }} ID:{{element.id}}
        </v-chip>
      </draggable>
    </div>

    <div class="col-3
    elevation-1
    ">
      <h3>Service</h3>
      <draggable class="list-group" :list="list4" :group="{name: 'Service', pull: 'clone', put: false}" @change="log">
        <v-chip
          class="ma-2 list-group-item"
          v-for="(element) in list4"
          :key="element.name"
          label
        >
          {{ element.name }} ID:{{element.id}}
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
          {{ element.name }} ID:{{element.id}}
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
          {{ element.name }} ID:{{element.id}}
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
          {{ element.name }} ID:{{element.id}}
        </v-chip>
      </draggable>
    </div>

    <div class="col-3
    elevation-1"
    >
      <h3>Gewünschter Service</h3>
      <draggable class="list-group" :list="list8" group="Service" @change="log">
        <v-chip
          class="ma-2 list-group-item"
          v-for="(element) in list8"
          :key="element.name"
          @click="removeAt(list8, element)"
          label
        >
          {{ element.name }} ID:{{element.id}}
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
          { name: "John", id: 1 },
          { name: "Joao", id: 2 },
          { name: "Jean", id: 3 },
          { name: "Gerard", id: 4 }
        ],
        list2: [
          { name: "Juan", id: 5 },
          { name: "Edgard", id: 6 },
          { name: "Johnson", id: 7 }
        ],
        list3: [
          { name: "Juan", id: 8 },
          { name: "Edgard", id: 9 },
          { name: "Johnson", id: 10 }
        ],
        list4: [
          { name: "Horst", id: 11 },
          { name: "Edgard", id: 12 },
          { name: "Johnson", id: 13 }
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