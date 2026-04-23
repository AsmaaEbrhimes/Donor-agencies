import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main-funding-requests',
  standalone: false,
  templateUrl: './main-funding-requests.html',
  styleUrl: './main-funding-requests.scss',
})
export class MainFundingRequests {
  indexTap = signal<any>(0);
  onNextTap(event: any) {
    this.indexTap.set(event);
  }
}
