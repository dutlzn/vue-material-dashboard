<template>
  <div>
    <v-row>
      <v-col cols="2" v-for="n in 6" :key="n">
        <v-card>
          <v-card-title>card {{ n }} </v-card-title>
          <v-card-text>test</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">submit</v-btn>
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

