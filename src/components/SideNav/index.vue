<template>
  <nav>
    <v-navigation-drawer
      :mini-variant.sync="drawer"
      permanent
      app
      dark
      width="250"
      v-model="drawer"
    >
      <!-- logo + 标题 -->

      <v-list-item class="px-2">
        <v-list-item-avatar >
          <v-img src="@/assets/logo.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="headline"> 后台管理系统 </v-list-item-title>
      </v-list-item>

      <v-list shaped>
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            :prepend-icon="item.icon"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in item.children"
              :key="child.text"
              :to="child.route"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.text"></v-list-item-title>
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
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>
        <span>后台管理系统</span>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn text>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { icon: "mdi-home", text: "主页", route: "/home" },
        {
          icon: "settings",
          text: "系统设置",
          children: [
            { icon: "mdi-account-circle ", text: "用户设置", route: "/" },
            { icon: "mdi-account-group ", text: "角色设置", route: "/" },
          ],
        },
      ],
    };
  },
};
</script>