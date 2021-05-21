<template>
  <v-app>
  <side-nav></side-nav>
  <!-- <tabs-view></tabs-view> -->
    <v-main>
      <router-view></router-view> 
    </v-main>
  </v-app>
</template>

<script>
  import SideNav from '@/components/SideNav'
  // import TabsView from '@/components/TabsView'

  export default {
    name: 'Home',

    components: {
      SideNav
      // TabsView
    },
  }
</script>
