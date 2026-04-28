import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-financial-governor',
  standalone: false,
  templateUrl: './financial-governor.html',
  styleUrl: './financial-governor.scss',
})
export class FinancialGovernor implements OnInit {
    data = signal<any>([]);

  ngOnInit(): void {
    this.getPortfoliosData();
    this.bodytabel();
  }

 getPortfoliosData() {
  let data = [
    {
      id: 1,
      name: 'محفظة دعم المشاريع الناشئة', // اسم مختلف
      creationDate: '01 يناير 2025',     // تاريخ قديم
      endDate: '01 يناير 2026',
      projectsCount: 150,                // رقم كبير
      status: 'نشطة',
    },
    {
      id: 2,
      name: 'محفظة ولادة حلم',
      creationDate: '15 مايو 2025',      // تاريخ متوسط
      endDate: '15 مايو 2026',
      projectsCount: 46,                 // رقم متوسط
      status: 'متوقفة',
    },
    {
      id: 3,
      name: 'أكاديمية التطوير التقني',     // اسم يبدأ بحرف الألف (للترتيب الأبجدي)
      creationDate: '20 ديسمبر 2024',    // تاريخ الأقدم
      endDate: '20 ديسمبر 2025',
      projectsCount: 10,                 // رقم صغير
      status: 'نشطة',
    },
    {
      id: 4,
      name: 'صندوق الاستثمار العقاري',
      creationDate: '10 يوليو 2025',
      endDate: '10 يوليو 2026',
      projectsCount: 89,
      status: 'متوقفة',
    }
  ];

  this.data.set(data);
}
  bodytabel() {
    return [
      { key: ' المحفظة', value: 'name' },
      { key: 'تاريخ الإنشاء', value: 'creationDate' },
      { key: 'تاريخ النهاية', value: 'endDate' },
      { key: 'عدد المشاريع', value: 'projectsCount' },
      { key: 'الحاله', value: 'status' },
    ];
  }
}
