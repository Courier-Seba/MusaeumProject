<template>
  <div>
    {{ data.id }}
  </div>
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
      data: {}
    }
  },
  methods: {
    retriveMuseumData: function () {
      api.museum.getMuseumData(this.id)
        .then(response => {
          this.data = response.data
        });
    }
  },
  beforeMount() {
    this.retriveMuseumData()
  }
}
</script>
