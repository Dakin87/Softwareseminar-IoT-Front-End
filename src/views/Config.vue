<template>
  <div id="app">
    
  </div>
</template>


<script>
import Vue from "vue";
import vueKanban from "vue-kanban";
Vue.use(vueKanban);
export default {
  name: "app",
  data() {
    return {
      stages: ["on-hold", "in-progress", "needs-review", "approved"],
      blocks: [],
      listPrimitive: null
    };
  },
  methods: {
    updateBlock(id, status) {
      let block = this.blocks[id];
      this.listPrimitive.update(id, { id, title: block.title, status });
    }
  }
  
};

</script>