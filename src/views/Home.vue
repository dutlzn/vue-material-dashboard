<template>
  <div>
    <v-row>
      <v-col cols="4" v-for="n in 5" :key="n">
        <v-card>
          <v-card-title>{{ n }} </v-card-title>
          <v-card-text>测试一下</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">测试</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {},

  data() {
    return {
      
    };
  },
};
</script>

