Component to display an artifact
<template>
  <div class="box" @click="expand">
    <h1 class="is-size-5 subtitle has-text-centered" v-if="showTitle">
      {{ artifact.name }}
    </h1>
    <b-collapse :open.sync="isOpen" v-else>
      <h1 class="is-size-5 subtitle has-text-centered">
        {{ artifact.name }}
      </h1>
    </b-collapse>
    <figure class="image is-square">
      <img :src="artifact.picture" alt="Error" />
    </figure>
    <b-collapse :open.sync="isOpen">
      <div class="has-text-black">{{ artifact.description }}</div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "AppArtifactBox",
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    artifact: Object,
    showTitle: Boolean
  },
  methods: {
    expand: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
