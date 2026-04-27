import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-partnership-management',
  standalone: false,
  templateUrl: './partnership-management.html',
  styleUrl: './partnership-management.scss',
})
export class PartnershipManagement implements OnInit {
  ngOnInit(): void {
    this.getData();
  }
  data = signal<any>([]);

  getData() {
    const rawData = [
      {
        partner_name: 'رؤية المسؤولية للاستشارات الإدارية',
        contribution: 'خطط إستراتيجية',
        partnership_type: 'استشارة',
      },
      {
        partner_name: 'رؤية المسؤولية للاستشارات الإدارية',
        contribution: 'خطط إستراتيجية',
        partnership_type: 'استشارة',
      },
      {
        partner_name: 'رؤية المسؤولية للاستشارات الإدارية',
        contribution: 'خطط إستراتيجية',
        partnership_type: 'استشارة',
      },
      {
        partner_name: 'شركة تطوير التقنية',
        contribution: 'دعم فني وتقني',
        partnership_type: 'تشغيل',
      },
      {
        partner_name: 'مؤسسة العطاء الخيرية',
        contribution: 'تمويل مالي',
        partnership_type: 'دعم',
      },
    ];
    this.data.set(rawData);
  }
  bodytabel() {
    return [
      { key: 'اسماء الشركاء', value: 'partner_name' },
      { key: 'مساهمة كل شريك', value: 'contribution' },
      { key: 'نوع الشراكة', value: 'partnership_type' },
    ];
  }
}
