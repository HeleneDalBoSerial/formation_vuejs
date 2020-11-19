export interface Times {
  updated: Date;
  updatedISO: Date;
  updateduk: Date;
}

export interface Bpi {
  USD: Rate;
  GBP: Rate;
  EUR: Rate;
}

export interface Rate {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

export interface BitcoinPriceResponse {
  time: Times;
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
}
