import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-meeting',
  standalone: false,
  templateUrl: './meeting.html',
  styleUrl: './meeting.scss',
})
export class Meeting implements OnInit {
  ngOnInit(): void {
    this.setupCalendarConstraints();
  }
  minDate = signal<Date>(new Date());
  setupCalendarConstraints(): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.minDate.set(today);
  }
}
