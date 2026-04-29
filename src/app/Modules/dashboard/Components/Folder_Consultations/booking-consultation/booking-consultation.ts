import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-booking-consultation',
  standalone: false,
  templateUrl: './booking-consultation.html',
  styleUrl: './booking-consultation.scss',
})
export class BookingConsultation implements OnInit{

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
