<template>
  <div class="news-box">
    <h1 class="subtitle is-5 is-bold">{{ title }}</h1>
    <p class="has-text-grey is-6">{{ body }}</p>
    <p>{{ displayDate }}</p>
  </div>
</template>

<script>
export default {
  name: "AppAnnouncement",
  data() {
    return {
      displayDate: ""
    };
  },
  props: {
    date: String,
    title: String,
    body: String
  },
  created() {
    let rawDate = new Date(this.date);
    this.displayDate = rawDate.toLocaleDateString("es");
  }
};
</script>

<style>
.news-box {
  border-top: solid 1px rgba(245, 245, 245, 0.8);
  border-bottom: solid 1px rgba(220, 220, 220, 1);
}
</style>
