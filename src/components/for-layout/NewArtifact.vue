<template>
   <div class="text-center">
    <v-dialog
      v-model="open"
      width="1050"
      :persistent="true"
    >

      <v-card class="general-card">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
            background-color='white' 
        >
          <v-text-field :label="$t('drawer.artifact.artifactName')"
          :hint="$t('drawer.artifact.artifactNameHint')"
          :rules="[rules.required]"
          >
          </v-text-field>
        </v-card-title>
          <v-row>
              <v-col fluid>
                 <v-textarea
                    background-color='white' 
                    filled
                    :label="$t('drawer.artifact.artifactDescription')"
                    auto-grow
                    counter
                    maxlength="250"
                    :rules="[rules.counter]"
                  ></v-textarea>
              </v-col>
          </v-row>
          <v-row>
              <v-col>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  :label="$t('drawer.artifact.artifactTag')"
                  multiple
                ></v-autocomplete>
              </v-col>
              </v-row>
       <!-- <v-row>
         TODO:
              <v-col>
              <v-file-input
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp"
                  :placeholder="$t('drawer.artifact.artifactImage')"
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-col>
          </v-row> -->
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
          >
            <span v-t="{
              path: 'general.acceptButton'
            }"> </span>              
          </v-btn>
          <v-btn 
          color="warning" 
          @click= "closePopUp"
          >
            <span v-t="{
              path: 'general.denyButton'
            }"> </span> 
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
  data(){
    return {
      rules: {
        counter: value => value.length <= 250,
        required: value => !!value || this.$t('general.requiredItem')
      }
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
.general-card{
  padding: 0.7rem;
}
</style>