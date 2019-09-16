This view contains information about the artifacts of a museum. Can create,
update and delete artifacts. Also create and modify collections.
<template>
  <div class="columns is-multiline">
    <div class="column is-full">
      <h1 class="is-size-5 subtitle">
        {{ $t("dashboard.artifactsView.title") }}
      </h1>
    </div>
    <div class="column is-full">
      <artifact-table :artifact-list="userMuseumArtifacts"></artifact-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ArtifactTable from "@/components/for-layout/ArtifactTable";
export default {
  name: "DashboardArtifactView",
  components: {
    ArtifactTable
  },
  computed: {
    ...mapGetters(["userMuseumArtifacts"])
  },
  methods: {
    ...mapActions(["getUserArtifacts"])
  },
  created() {
    if (this.userMuseumArtifacts.length === 0) {
      this.getUserArtifacts();
    }
  }
};
</script>
