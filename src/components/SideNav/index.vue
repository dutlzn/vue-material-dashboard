<template>
  <nav>
    <v-navigation-drawer :style="{background:$vuetify.theme.themes.light.admin}" :mini-variant.sync="drawer" permanent
      app  dark width="230" v-model="drawer">
      <!-- logo + 标题 -->

      <!-- <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="@/assets/logo.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="headline"> 后台管理系统 </v-list-item-title>
      </v-list-item> -->

      <v-list shaped>
        <template v-for="item in items">
          <v-list-group v-model="item.model" v-if="item.children" :key="item.text" 

            :append-icon="item['icon-alt']" no-action>
            <!-- :prepend-icon="item.icon" -->
            <template v-slot:prependIcon>
              <v-icon small v-text="item.icon" class="pa-0"></v-icon>
            </template>


            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="text-button"  v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="child in item.children" :key="child.text" :to="child.route">
              <v-list-item-content>
                <v-list-item-title class="text-button" v-text="child.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item v-else :key="item.text" :to="item.route" active-class="blue--text">
            <v-list-item-icon>
              <v-icon small v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-button" >{{ item.text }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense color="white">
      <!-- <v-app-bar-nav-icon color="grey"  @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-btn text small @click="drawer=!drawer" class="mr-2">
        <v-icon>mdi-menu-open </v-icon>
      </v-btn>



      <v-app-bar-title class="black--text text-body-2
      ">
        <span>后台管理系统</span>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn text color="grey--text">
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
            'icon-alt': 'mdi-chevron-down',
            'icon-change': 'mdi-chevron-up',
            icon: "settings",
            text: "系统设置",
            model: false,
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


<style scoped lang="scss">
  ::v-deep .v-list-group__header__prepend-icon {
    padding-right: 1px !important;
  }

  ::v-deep .v-list-item {
    padding: 0  px;
  }
</style>
