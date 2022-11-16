import { CompanyDetails } from './company';
import { Quote } from './quote';

export interface StockSymbol {
  quote: Quote;
  symbol: CompanyDetails;
}
