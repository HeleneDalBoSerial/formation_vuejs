import CryptoService from '@/common/services/crypto.service';
import { BitcoinPriceResponse } from '@/common/models/bitcoin-price-response';

//STATE
export interface CryptoState {
  loading: boolean;
  bitcoinPrice: BitcoinPriceResponse;
}

const initialState: CryptoState = {
  loading: false,
  bitcoinPrice: null,
};

export const state = { ...initialState };

//MUTATIONS
export enum MutationTypes {
  SET_LOADING = 'setLoading',
  SET_BITCOIN_PRICE = 'setBitcoinPrice',
}

export const mutations = {
  [MutationTypes.SET_LOADING](state, value) {
    state.loading = value;
  },
  [MutationTypes.SET_BITCOIN_PRICE](state, value) {
    state.bitcoinPrice = value;
  },
};

//ACTIONS
const cryptoService = new CryptoService();

export enum ActionTypes {
  GET_BITCOIN_PRICE = 'getBitcoinPrice',
}

export const actions = {
  async [ActionTypes.GET_BITCOIN_PRICE](context) {
    context.commit(MutationTypes.SET_LOADING, true);

    const data = await cryptoService.getBitcoinPrice();
    context.commit(MutationTypes.SET_BITCOIN_PRICE, data);

    context.commit(MutationTypes.SET_LOADING, false);
  },
};

//GETTERS
const getters = {
  isLoading(state: CryptoState) {
    return state.loading;
  },
  bitcoinPrice(state: CryptoState) {
    return state.bitcoinPrice;
  },
};

//STORE
const namespaced = true;
export default {
  namespaced,
  state,
  actions,
  mutations,
  getters,
};
