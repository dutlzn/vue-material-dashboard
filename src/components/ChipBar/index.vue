<template>
  <v-row>
    <v-col>
      <v-sheet class="width-100pc">
        <v-chip-group v-model="activeIndex" active-class="chip-active">
          <v-chip
            label
            outlined
            close
            close-icon="mdi-close"
            @click:close="close(item)"
            @click="active(item)"
            v-for="item in visitedItem"
            :key="item.id"
            class="chip"
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
      alert("关闭" + item.text);
    },
    active(item) {
      let _this = this;
      _this.activeIndex = item.id;
    },
  },
  data() {
    return {
      activeIndex: 0,
      visitedItem: [
        {
          id: 0,
          text: "首页",
          active: false,
        },
        {
          id: 1,
          text: "仪表盘",
          active: false,
        },
      ],
    };
  },
};
</script>

