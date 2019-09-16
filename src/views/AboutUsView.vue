<template>
  <div class="columns is-multiline is-vcentered" id="about-us-container">
    <div class="column is-full has-text-centered" id="about-us-title">
      <h1 class="title is-size-1">{{ $t("aboutUsView.title") }}</h1>
    </div>
    <div class="column is-two-quarters" id="about-us-pic">
      <figure class="image is-3by2">
        <img src="/assets/los-giles.png" alt="Ups" />
      </figure>
    </div>
    <div class="column is-one-quarters is-size-3" id="about-us-intro">
      <p>{{ $t("aboutUsView.intro") }}</p>
    </div>
    <div class="column is-full has-text-centered">
      <h1 class="subtitle is-size-2">{{ $t("aboutUsView.objetiveTitle") }}</h1>
      <p class="has-text-black is-size-3">{{ $t("aboutUsView.objetive") }}</p>
    </div>
    <div class="column is-half">
      <h1 class="subtitle is-size-2">{{ $t("aboutUsView.processTitle") }}</h1>
      <p class="has-text-black is-size-4">{{ $t("aboutUsView.process") }}</p>
    </div>
    <div class="column is-half"></div>
  </div>
</template>

<style>
#about-us-container {
  padding: 2.5rem;
}
#about-us-title {
}
</style>
