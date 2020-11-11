<template>
  <v-card tile :loading="isLoading" @click="pushToMuseum">
    <template slot="progress">
      <v-progress-linear
        color="info"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img :src="data.front_picture" max-height="300"></v-img>

    <v-card-title>
      <v-avatar>
        <v-img :src="data.logo"></v-img>
      </v-avatar>
      {{ data.name }}
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-subtitle> {{ data.country }} {{ data.city }} </v-card-subtitle>
  </v-card>
</template>

<script>
import api from "@/api";

export default {
  name: "MuseumCard",
  props: {
    id: Number
  },
  data() {
    return {
      isLoading: false,
      data: {}
    };
  },
  methods: {
    retriveMuseumData: function() {
      this.isLoading = true;
      api.museum.getMuseumData(this.id).then(response => {
        this.data = response.data;
        this.isLoading = false;
      });
    },
    pushToMuseum: function() {
      let pathUserMuseum = "/musaeum/" + this.id;
      this.$router.push(pathUserMuseum);
    }
  },
  beforeMount() {
    this.retriveMuseumData();
  }
};
</script>
