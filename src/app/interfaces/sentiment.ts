export interface Sentiment {
  data: Array<SentimentDetails>;
  symbol: string;
}

export interface SentimentDetails {
  symbol: string;
  year: number;
  month: number;
  change: number;
  mspr: number;
}
