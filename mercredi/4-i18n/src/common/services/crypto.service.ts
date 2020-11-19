import { BitcoinPriceResponse } from "../models/bitcoin-price-response";
import axios from "axios";
import { EndpointsConfig } from "@/config/endpoints.config";

export default class CryptoService {
  async getBitcoinPrice(): Promise<BitcoinPriceResponse> {
    const httpResponse = await axios.get(EndpointsConfig.crypto.bitcoinRate);
    return httpResponse.data;
  }
}
