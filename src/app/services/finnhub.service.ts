import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinnhubService {
  baseUrl: string = 'https://finnhub.io/api/v1';

  constructor(private http: HttpClient) {}

  getQuote(symbol: string): Observable<any> {
    const params = new HttpParams({ fromObject: { symbol } });
    return this.http.get<Observable<any>>(this.baseUrl, { params });
  }
}
