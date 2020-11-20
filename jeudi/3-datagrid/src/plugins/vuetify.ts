import Vue from 'vue';
import { primary } from '@ugitech/web-template/lib/util/colors';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  light: true,
  theme: {
    themes: {
      light: {
        primary,
      },
    },
  },
});
