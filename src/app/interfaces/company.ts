export interface Company {
  count: number;
  result: Array<CompanyDetails>;
}

export interface CompanyDetails {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}
