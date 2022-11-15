import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  searchValue: string = '';

  constructor() {}

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe({
      next: (value) => (this.searchValue = value),
    });
  }

  search(): void {
    console.log(this.searchValue);
  }
}
