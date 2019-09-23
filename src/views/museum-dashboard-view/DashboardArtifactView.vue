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
      <dashboard-artifact-table
        :artifact-list="userMuseumArtifacts"
      ></dashboard-artifact-table>
    </div>
    <div class="column is-full">
      <div class="level level-border">
        <div class="level-left">
          <p class="is-size-4">
            {{ $t("dashboard.artifactsView.upload") }}
          </p>
        </div>
        <div class="level-right">
          <b-button
            @click="openUploadModal"
            icon-left="upload"
            type="is-primary"
            >{{ $t("dashboard.artifactsView.uploadButtom") }}</b-button
          >
          <artifact-upload-modal
            :isModalActive="isModalActive"
            :registrator="userPk"
            :museum="userMuseum.id"
            @closeModal="closeUploadModal"
          ></artifact-upload-modal>
        </div>
      </div>
    </div>
    <div class="column is-full">
      <div class="level">
        <div class="level-left">
          <p class="is-size-4">
            {{ $t("dashboard.artifactsView.createCollection") }}
          </p>
        </div>
        <div class="level-rigth">
          <dashboard-artifact-collection> </dashboard-artifact-collection>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DashboardArtifactTable from "@/components/for-views/DashboardArtifactTable";
import DashboardArtifactCollection from "@/components/for-views/DashboardArtifactCollection";
import ArtifactUploadModal from "@/components/for-layout/ArtifactUploadModal";
export default {
  name: "DashboardArtifactView",
  data() {
    return {
      isModalActive: false
    };
  },
  components: {
    DashboardArtifactTable,
    DashboardArtifactCollection,
    ArtifactUploadModal
  },
  computed: {
    ...mapGetters(["userMuseumArtifacts", "userPk", "userMuseum"])
  },
  methods: {
    ...mapActions(["getUserArtifacts"]),
    openUploadModal: function() {
      this.isModalActive = true;
    },
    closeUploadModal: function() {
      this.isModalActive = false;
    }
  },
  created() {
    if (this.userMuseumArtifacts.length === 0) {
      this.getUserArtifacts();
    }
  }
};
</script>

<style>
.level-border {
  padding: 0.5rem;
  border-bottom: 1px solid rgba(233, 233, 233, 1);
  border-radius: 10px;
}
</style>
