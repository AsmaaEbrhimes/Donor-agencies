import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-details-financial-converner',
  standalone: false,
  templateUrl: './details-financial-converner.html',
  styleUrl: './details-financial-converner.scss',
})
export class DetailsFinancialConverner implements OnInit {
  data = signal<any>([]);

  ngOnInit() {
    this.getData();
  }

getData() {
    const rawData = [
      {
        id: 1,
        projectName: 'الاستراتيجية الناجحة 24 خطوة',
        implementedBy: 'معمار للتشييد',
        funding: '150000 ريال سعودي',
        progress: '75%',
        status: 'جاري',
        spendingRatio: 'مرتفع',
      },
      {
        id: 2,
        projectName: 'الاستراتيجية الناجحة 24 خطوة',
        implementedBy: 'معمار للتشييد',
        funding: '150000 ريال سعودي',
        progress: '75%',
        status: 'متوقف',
        spendingRatio: 'متوسط',
      },
      {
        id: 3,
        projectName: 'الاستراتيجية الناجحة 24 خطوة',
        implementedBy: 'معمار للتشييد',
        funding: '150000 ريال سعودي',
        progress: '75%',
        status: 'مكتمل',
        spendingRatio: 'ضعيف',
      },
      {
        id: 4,
        projectName: 'الاستراتيجية الناجحة 24 خطوة',
        implementedBy: 'معمار للتشييد',
        funding: '150000 ريال سعودي',
        progress: '75%',
        status: 'جاري',
        spendingRatio: 'مرتفع',
      },
    ];
    this.data.set(rawData);
  }
  bodyTable() {
    return [
      { key: 'اسم المشروع', value: 'projectName' },
      { key: 'الجهة المنفذة', value: 'implementedBy' },
      { key: 'التمويل المخصص', value: 'funding' },
      { key: 'نسبة التقدم', value: 'progress' },
      { key: 'الحالة', value: 'status' },
      { key: 'نسبة الصرف', value: 'spendingRatio' },
    ];
  }
}
