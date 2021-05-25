<template>
  <v-row>
    <v-col>
      <v-sheet class="width-100pc">
        <v-chip-group v-model="activeIndex" mandatory active-class="chip-active">
          <v-chip
            label
            outlined
            close
            close-icon="mdi-close"
            @click:close="close(item)"
            @click="active(item)"
            v-for="item in visitedItem"
            :key="item.id"
          >
            {{ item.text }}
          </v-chip>
        </v-chip-group></v-sheet
      ></v-col
    >
  </v-row>
</template>

<script>
export default {
  methods: {
    close(item) {
      // alert("关闭" + item.text);
      if(item.id == 1) {
        this.activeIndex = 0;
      }
      else {
        this.activeIndex = 1;
      }
    },
    active(item) {
      let _this = this;
      _this.activeIndex = item.id;
      console.log(item.id + "\t" + _this.activeIndex);
    },
  },
  data() {
    return {
      activeIndex: 0,
      visitedItem: [
        {
          id: 0,
          text: "首页",
        },
        {
          id: 1,
          text: "仪表盘",
        },
      ],
    };
  },
};
</script>

<style>
.chip:hover {
  border-bottom: 2px solid blue !important;
}
.chip-active {
  border-bottom: 2px solid blue !important;
  color: blue!important;
}
</style>
