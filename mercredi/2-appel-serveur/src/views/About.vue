<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="6">
        <v-btn block @click="btnClicked">Clique ici</v-btn>
      </v-col>
      <v-col sm="12" md="6">
        <v-card color="#385F73" dark>
          <v-card-text>
            <v-list-item>
              <v-list-item-content v-for="couleur in maListe" :key="couleur">
                <v-list-item-title>{{ couleur }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col sm="12" md="3">
        <v-text-field label="texte 1"></v-text-field>
      </v-col>
      <v-col sm="12" md="3">
        <v-text-field label="texte 2"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col sm="12" md="3">
        <v-text-field label="texte 3"></v-text-field>
      </v-col>
      <v-col sm="12" md="3">
        <v-text-field label="texte 4"></v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="bitcoinRate">
      <h1>Bitcoin Price Index</h1>
      <v-card color="#B9C95E">
        <v-card-text>
          <v-list-item>
            <v-list-item-content
              v-for="currency in bitcoinRate.bpi"
              :key="currency.code"
            >
              {{ currency.description }}:
              <v-list-item-title
                ><span class="lighten">
                  <span v-html="currency.symbol"></span
                  >{{ currency.rate_float | currencydecimal }}
                </span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CryptoService from '@/common/services/crypto.service';
import { BitcoinPriceResponse } from '@/common/models/bitcoin-price-response';

@Component({})
export default class About extends Vue {
  maListe = ['Orange', 'Vert', 'Bleu', 'Rouge'];
  bitcoinRate: BitcoinPriceResponse = null;

  btnClicked(): void {
    alert('Hey!');
  }

  mounted(): void {
    const cryptoService = new CryptoService();
    cryptoService.getBitcoinPrice().then((result) => {
      this.bitcoinRate = result;
    });
  }
}
</script>
