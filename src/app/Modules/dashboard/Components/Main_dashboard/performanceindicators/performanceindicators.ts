import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-performanceindicators',
  standalone: false,
  templateUrl: './performanceindicators.html',
  styleUrl: './performanceindicators.scss',
})
export class Performanceindicators implements OnInit {
  data = signal<any>([]);

  ngOnInit(): void {
    this.getData();
    this.bodytabel();
  }

  getData() {
    const rawData = [
      {
        id: 1,
        project: 'الاستراتيجية الناجحة 24 خطوة',
        impact_type: 'اجتماعي',
        beneficiaries_count: 1500,
        completion_rate: '75%',
        status: 'جاري',
        impact_level: 'مرتفع',
      },
      {
        id: 2,
        project: 'تطوير الكوادر القيادية',
        impact_type: 'اقتصادي',
        beneficiaries_count: 850,
        completion_rate: '100%',
        status: 'مكتمل',
        impact_level: 'مرتفع',
      },
      {
        id: 3,
        project: 'مبادرة التحول الرقمي',
        impact_type: 'تقني',
        beneficiaries_count: 3200,
        completion_rate: '40%',
        status: 'متوقف',
        impact_level: 'متوسط',
      },
      {
        id: 4,
        project: 'برنامج الاستدامة البيئية',
        impact_type: 'بيئي',
        beneficiaries_count: 500,
        completion_rate: '15%',
        status: 'جاري',
        impact_level: 'ضعيف',
      },
    ];
    this.data.set(rawData);
  }

  bodytabel() {
    return [
      { key: 'المشاريع', value: 'project' },
      { key: 'نوع التأثير', value: 'impact_type' },
      { key: 'عدد المستفيدين', value: 'beneficiaries_count' },
      { key: 'معدل الإنجاز', value: 'completion_rate' },
      { key: 'الحالة', value: 'status' },
      { key: 'مستوى التأثير', value: 'impact_level' },
    ];
  }
}
