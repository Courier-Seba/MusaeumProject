This view allows the user to modify his profile information.
<template>
  <div class="columns is-multiline">
    <div class="column is-full">
      <h1 class="subtitle is-size-3">
        {{ $t("dashboard.profileView.title") }}
      </h1>
    </div>

    <div class="column is-full">
      <div class="columns is-multiline">
        <div class="column is-four-fifths">
          <b-field horizontal :label="$t('dashboard.profileView.firstName')">
            <b-input v-model="firstName"></b-input>
          </b-field>
          <b-field horizontal :label="$t('dashboard.profileView.firstName')">
            <b-input v-model="firstName"></b-input>
          </b-field>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardProfileView",
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  }
};
</script>
