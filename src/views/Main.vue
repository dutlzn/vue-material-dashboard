<template>
  <v-app>
    <side-nav></side-nav>
    <!-- <tabs-view></tabs-view> -->
    <v-main class="main">
      <router-view></router-view>
    </v-main>

    
      <!-- <v-footer padless>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>vue-material-admin</strong>
        </v-col>
      </v-footer> -->
  </v-app>
</template>

<script>
import SideNav from "@/components/SideNav";
// import TabsView from '@/components/TabsView'

export default {
  name: "Home",

  components: {
    SideNav,
    // TabsView
  },
};
</script>


