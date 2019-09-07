<template>
    <section>

      <div class="sticky-container">
          <ul class="sticky">
              <li>

                <button class="button is-success is-rounded"
                    @click="isCardModalActive = true">
                    <b-icon icon="upload"></b-icon>
                    <span>Click to upload</span>
                </button>

                <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
                    <div class="card">
                        <div v-if="url" class="card-image">
                            <figure class="image is-16by9">
                                <img :src="url" alt="Image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                  <b-field label="Title">
                                      <b-input value=""></b-input>
                                  </b-field>
                                  <b-field label="Museum">
                                      <b-input value=""></b-input>
                                  </b-field>
                                  </b-field>
                                  <b-field label="Author">
                                      <b-input value=""></b-input>
                                  </b-field>
                                  <b-field horizontal label="Description">
                                      <b-input type="textarea"></b-input>
                                  </b-field>
                                </div>
                              </div>
                              <div class="field">
                                <div class="file is-primary">
                                  <label class="file-label">
                                    <input class="file-input" type="file" name="resume" @change="onFileChange">
                                    <span class="file-cta">
                                      <span class="file-label">
                                        Choose File!
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </div>
                              <div class="buttons is-grouped is-right">
                                <b-button type="is-success">Upload!</b-button>

                                <b-button type="is-danger" @click="eliminarUrl">Cancel</b-button>
                              </div>
                        </div>
                    </div>
                </b-modal>
              </li>
          </ul>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isCardModalActive: false,
                url: null
            }
        },
        methods:{

          onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
            console.log(file)
            console.log(this.url)
          },

          eliminarUrl() {
            this.url = null
            this.isCardModalActive = false
          }
        }
      }
</script>

<style>
.sticky-container{
padding:0px;
margin:0px;
position:fixed;
right:-130px;
bottom:130px;
width:210px;
z-index: 1100;
}
.sticky li{
list-style-type:none;
background-color:#fff;
color:#efefef;
height:43px;
padding:0px;
margin:0px 0px 1px 0px;
-webkit-transition:all 0.25s ease-in-out;
-moz-transition:all 0.25s ease-in-out;
-o-transition:all 0.25s ease-in-out;
transition:all 0.25s ease-in-out;
cursor:pointer;
}
.sticky li:hover{
margin-left:-115px;
}
.sticky li img{
float:left;
margin:5px 4px;
margin-right:5px;
}
.sticky li p{
padding-top:5px;
margin:0px;
line-height:16px;
font-size:11px;
}
.sticky li p a{
text-decoration:none;
color:#2C3539;
}
.sticky li p a:hover{
text-decoration:underline;
}
</style>
