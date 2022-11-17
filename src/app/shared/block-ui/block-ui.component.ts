import { Component, OnInit } from '@angular/core';
import { BlockUiService } from '../../services/block-ui.service';

@Component({
  selector: 'app-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrls: ['./block-ui.component.css'],
})
export class BlockUiComponent implements OnInit {
  loading: boolean = false;

  constructor(private blockUiService: BlockUiService) {}

  ngOnInit() {
    this.blockUiService.isLoading().subscribe({
      next: (isLoading) => (this.loading = isLoading),
    });
  }
}
