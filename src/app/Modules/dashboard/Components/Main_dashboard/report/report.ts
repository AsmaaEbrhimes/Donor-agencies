import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-report',
  standalone: false,
  templateUrl: './report.html',
  styleUrl: './report.scss',
})
export class Report implements OnInit {
  data = signal<any[]>([]);

  ngOnInit(): void {
    this.GetDataFromReport();
  }

  GetDataFromReport() {
    this.data.set([
      {
        title: 'عدد المشاريع الممولة',
        description: '0 مشروع',
      },
      {
        title: 'إجمالي التمويل المخصص',
        description: '0 ريال سعودي',
      },
      {
        title: 'إجمالي التمويل المنفق',
        description: '0 ريال سعودي',
      },
      {
        title: 'تقدم المشاريع الممولة',
        description: '0%',
      },
      {
        title: 'نسبة المشاريع الناجحة',
        description: '0%',
      },
      {
        title: 'تحليل الفجوات مقابل النتائج',
        description: '0%',
      },
      {
        title: 'تحليل الفجوات مقابل النتائج',
        description: '0%',
      }
    ]);
  }
}
