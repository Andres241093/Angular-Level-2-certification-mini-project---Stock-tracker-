import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  loading: boolean = false;

  constructor(private spinner: SpinnerService) {}

  ngOnInit() {
    this.spinner.isLoading().subscribe({
      next: (isLoading) => {
        this.loading = isLoading;
        console.log(this.loading);
      },
    });
  }
}
