<!-- <template>
  <nav>
    <h1 class="font-weight-bold display-1">选项卡+路由测试</h1>

    <v-tabs v-model="tab" >
      <v-tab v-for="item in items" :key="item.id" :to="item.link">
        {{ item.name }}
      </v-tab>
    </v-tabs>
     
  </nav>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        {
          id: 1,
          name: "选项1",
          link: "/test",
        },
        {
          id: 2,
          name: "选项2",
          link: "/test2",
        },
      ],
      };
  },
};
</script> -->