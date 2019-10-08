<template>
  <div class="news-box">
    <h1 class="subtitle is-5 is-bold">{{ title }}</h1>
    <p class="has-text-grey is-6">{{ body }}</p>
    <p>{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: "AppAnnouncement",
  props: {
    date: String,
    title: String,
    body: String
  }
};
</script>
