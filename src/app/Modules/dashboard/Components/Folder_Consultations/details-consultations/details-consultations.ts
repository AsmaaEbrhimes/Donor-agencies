import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-details-consultations',
  standalone: false,
  templateUrl: './details-consultations.html',
  styleUrl: './details-consultations.scss',
})
export class DetailsConsultations implements OnInit{
  ngOnInit(): void {
    this.ResponsiveCursol();
  }
  responsiveOptions: any[] | undefined;
  data = signal<any>(this.getConsultantsData());

  ResponsiveCursol() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1200px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

    getConsultantsData(): any {
    return [
      {
        id: 1,
        name: 'خالد الزهراني',
        title: 'مستشار مالي',
        projectsCount: 5,
        rating: 3.5,
        image: 'assets/Svg/Frame 95.svg',
      },
      {
        id: 2,
        name: 'سارة الأحمد',
        title: 'مستشار قانوني',
        projectsCount: 12,
        rating: 4.8,
        image: 'assets/Svg/Frame 95.svg',
      },
      {
        id: 3,
        name: 'محمد العتيبي',
        title: 'خبير استثمار',
        projectsCount: 8,
        rating: 4.0,
        image: 'assets/Svg/Frame 95.svg',
      },
      {
        id: 4,
        name: 'ريم الدوسري',
        title: 'محلل بيانات مالية',
        projectsCount: 15,
        rating: 4.5,
        image: 'assets/Svg/Frame 95.svg',
      },
    ];
  }

}
