<template>
  <v-container>
    <v-btn block @click="btnClicked">Clique ici</v-btn>
    <v-card color="#385F73" dark>
      <v-card-text>
        <v-list-item>
          <v-list-item-content v-for="couleur in maListe" :key="couleur">
            <v-list-item-title>{{ couleur }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class About extends Vue {
  maListe = ['Orange', 'Vert', 'Bleu', 'Rouge'];

  btnClicked(): void {
    alert('Hey!');
  }
}
</script>
