<template>
  <nav>
    <v-navigation-drawer
      :style="{ background: $vuetify.theme.themes.light.admin }"
      :mini-variant.sync="drawer"
      permanent
      app
      dark
      width="205"
      v-model="drawer"
    >
      <!-- logo + 标题 -->

      <!-- <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="@/assets/logo.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="headline"> 后台管理系统 </v-list-item-title>
      </v-list-item> -->

      <v-list shaped>
        <template v-for="item in items">
          <v-list-group
            v-model="item.model"
            v-if="item.children"
            :key="item.text"
            :append-icon="item['icon-alt']"
            no-action
          >
            <!-- :prepend-icon="item.icon" -->
            <template v-slot:prependIcon>
              <v-icon small v-text="item.icon"></v-icon>
              <!-- <v-icon small v-text="item.icon" class="me-3"></v-icon> -->
            </template>

            <template v-slot:activator>
              <v-list-item-content class="ml-n6">
                <v-list-item-title
                  class="text-button"
                  v-text="item.text"
                ></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              class="ml-n6"
              v-for="child in item.children"
              :key="child.text"
              :to="child.route"
            >
              <v-list-item-content>
                <v-list-item-title
                  class="text-button"
                  v-text="child.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item
            v-else
            :key="item.text"
            :to="item.route"
            active-class="blue--text"
          >
            <v-list-item-icon>
              <v-icon small v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-button ml-n6">{{
              item.text
            }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense color="white" style="border-bottom: 5px solid red">
      <!-- <v-app-bar-nav-icon color="grey"  @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-btn text small @click="drawer = !drawer" class="mr-2">
        <v-icon>mdi-menu-open </v-icon>
      </v-btn>

      <v-app-bar-title class="black--text text-body-2">
        <span>后台管理系统</span>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn text color="grey--text">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>

      <template v-slot:extension>
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
    </v-app-bar>
  </nav>
</template>


<script>
export default {
  methods: {
    close(item) {
      alert('关闭' + item.text);
    },
    active(item) {
      let _this = this;
      _this.activeIndex = item.id;
    },
  },
  data() {
    return {
      drawer: true,
      items: [
        { icon: "mdi-home", text: "主页", route: "/home" },
        {
          "icon-alt": "mdi-chevron-down",
          "icon-change": "mdi-chevron-up",
          icon: "settings",
          text: "系统设置",
          model: false,
          children: [
            { icon: "mdi-account-circle ", text: "用户设置", route: "/" },
            { icon: "mdi-account-group ", text: "角色设置", route: "/" },
          ],
        },
      ],
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


<style>
.v-toolbar__content {
  border-bottom: 1px solid #eee;
}

.chip:hover {
  border-bottom: 2px solid blue !important;
}
.chip-active {
  border-bottom: 2px solid blue !important;
  color: blue!important;
}
</style>

