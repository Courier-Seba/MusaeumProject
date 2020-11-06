Cosas a agregar:
[X] Nombre del Museo
[X] Cantidad visitas del Museo
[] Dias de las visitas
[X] Eje X, días
[] Eje Y, cantidad

<template>
 <v-card>
  <v-card-text id="museumName"> {{ userMuseumData.name }} </v-card-text>
  <v-sheet
    class="v-sheet--offset mx-auto"
    color="white"
    elevation="15"
    max-width="calc(100% - 32px)"
  >

  <v-sparkline
    :value="value"
    :gradient="gradient"
    :smooth="radius"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  >
    <template v-slot:label="item">
        {{ item.value }}
    </template>
  </v-sparkline>
  </v-sheet>


</v-card>
</template>

<script>
import { mapGetters} from "vuex";

  export default {
    name: "ArtifactCharts",
    data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
      computed: {
    ...mapGetters(["userMuseumData"])
    },
  }
  
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
</script>

<style>
#museumName{

}
</style>