<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Creado:
          </th>
          <th class="text-left">
            Eliminar:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="artifact in artifactsList"
          :key="artifact.name"
        >
          <td>{{ artifact.name }}</td>
          <td>{{ artifact.created_at }}</td>
          <td>
            <v-btn
              rounded
            >
              <v-icon
                medium
              >mdi-trash-can</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import api from "@/api";
import { mapGetters } from "vuex";

export default {
  name: "ArtifactManagement",
  data() {
    return {
      artifactsList: []
    }
  },
  computed: {
    ...mapGetters(["userMuseumData"])
  },
  methods: {
    retriveMuseumArtifacts: function () {
      api.artifact.getListArtifactOfMuseum(this.userMuseumData.id)
        .then(response => {
          return this.artifactsList = response.data.results;
        })
    }
  },
  beforeMount() {
    this.retriveMuseumArtifacts()
  }

}
</script>

<style>

</style>
