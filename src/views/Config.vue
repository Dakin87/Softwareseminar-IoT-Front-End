<template>
  <div class="row 
    px-5 py-3 mx-10 my-5 justify-center
    elevation-5
    ">
    <div class="col-3
    elevation-1"
    >
      <h3>Draggable 1</h3>
      <draggable class="list-group" :list="list1" group="people" @change="log" :move="checkMove">
        <div
          class="list-group-item"
          v-for="(element, index) in list1"
          :key="element.name"
        >
          {{ element.name }} ID:{{element.id}} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3
    elevation-1
    ">
      <h3>Draggable 2</h3>
      <draggable class="list-group" :list="list2" :group="{name: 'people', pull: 'clone', put: false}" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list2"
          :key="element.name"
        >
          {{ element.name }} ID:{{element.id}} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3
    elevation-1
    ">
      <h3>Draggable 3</h3>
      <draggable class="list-group" :list="list3" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list3"
          :key="element.name"
        >
          {{ element.name }} ID:{{element.id}} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3
    elevation-1
    ">
      <h3>Draggable 4</h3>
      <draggable class="list-group" :list="list4" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list4"
          :key="element.name"
        >
          {{ element.name }} ID:{{element.id}} {{ index }} 
        </div>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />

    <rawDisplayer class="col-3" :value="list3" title="List 3" />

    <rawDisplayer class="col-3" :value="list4" title="List 4" />

  <div class="col-12
    elevation-1"
    >
      <h3>Gewünschte Komponenten</h3>
      <draggable class="list-group" :list="list5" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list5"
          :key="element.name"
        >
          {{ element.name }} ID:{{element.id}} {{ index }} 
        </div>
      </draggable>
    </div>

    <rawDisplayer class="col-12" :value="list5" title="List 5" />

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
          { name: "Horst", id: 14 },
          { name: "Edgard", id: 15 },
          { name: "Johnson", id: 16 }
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
      }
    }
  };
</script>