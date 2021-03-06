import Vue from "vue";
import Vuex from "vuex";

import crypto from "./crypto-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    crypto
  }
});
