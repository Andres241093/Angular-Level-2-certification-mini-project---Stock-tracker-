import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  loading: Subject<boolean> = new Subject();

  constructor() {}

  show(): void {
    this.loading.next(true);
  }

  hide(): void {
    this.loading.next(false);
  }

  isLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }
}
