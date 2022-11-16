import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinnhubService {
  baseUrl: string = 'https://finnhub.io/api/v1';
  header: HttpHeaders = new HttpHeaders({
    'X-Finnhub-Token': 'bu4f8kn48v6uehqi3cqg',
  });

  constructor(private http: HttpClient) {}

  getQuote(symbol: string): Observable<any> {
    const params = new HttpParams({ fromObject: { symbol } });
    const headers = this.header;
    return this.http.get<Observable<any>>(this.baseUrl, { headers, params });
  }
}
