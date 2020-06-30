<template>
   <div class="text-center">
    <v-dialog
      v-model="open"
      width="1050"
      :persistent="true"
    >

      <v-card class="generalCard">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Nuevo artefacto
        </v-card-title>
       <v-row>
              <v-col fluid>
                <v-text-field label="Nombre del Artefacto"
                hint="Ingrese nombre del artefacto"
                required
                >
                </v-text-field>
              </v-col>
              <v-col>
              <v-file-input
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp"
                  :placeholder="$t('drawer.artifact.artifactImage')"
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-col>
          </v-row>
          <v-row>
              <v-col fluid>
                <v-text-field label="Descripción del Artefacto"
                 hint="Ingrese una breve descripción del artefacto"
                 required
                 >
                 </v-text-field>
              </v-col>
              <v-col >
                <v-select
                  :items="['Deporte', 'Historia', 'Ciencia', 'Musica','Tecnología']"
                  label="Elija categoría del artefacto"
                  required
                ></v-select>
              </v-col>
              <v-col>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Intereses"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
          >
            Subir artefacto
          </v-btn>
          <v-btn 
          color="warning" 
          @click= "closePopUp"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "NewArtifact",
  props: {
    open: {
      type: Boolean,
    }
  },
  methods: {
    closePopUp: function() {
      this.$emit("closePopUp");
    }
  }
}
</script>

<style scoped>
*{
  padding: 2.5px;
}
</style>