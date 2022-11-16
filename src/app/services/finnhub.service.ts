import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Company } from '../interfaces/company';
import { Quote } from '../interfaces/quote';

@Injectable({
  providedIn: 'root',
})
export class FinnhubService {
  baseUrl: string = 'https://finnhub.io/api/v1';
  token: string = 'bu4f8kn48v6uehqi3cqg';

  constructor(private http: HttpClient) {}

  getQuote(symbol: string): Observable<Quote> {
    const token = this.token;
    const params = new HttpParams({ fromObject: { symbol, token } });
    return this.http
      .get<Quote>(this.baseUrl + '/quote', {
        params,
      })
      .pipe(
        map((item) => {
          return {
            ...item,
            dp: item.dp / 100,
          };
        })
      );
  }

  searchSymbol(query: string): Observable<Company> {
    const token = this.token;
    const params = new HttpParams({ fromObject: { q: query, token } });
    return this.http.get<Company>(this.baseUrl + '/search', {
      params,
    });
  }
}
