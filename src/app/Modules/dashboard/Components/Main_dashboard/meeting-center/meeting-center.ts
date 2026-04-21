import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-meeting-center',
  standalone: false,
  templateUrl: './meeting-center.html',
  styleUrl: './meeting-center.scss',
})
export class MeetingCenter implements OnInit {
  data = signal<any>([]);

  ngOnInit() {
    this.getData();
    this.bodytabel()
  }

  getData() {
    const rawData = [
      {
        id: 1,
        project: 'عباق',
        date: '15 نوفمبر',
        time: '10:00 مساءً',
        consultant: 'عبدالله',
        verification_method: 'الحالة',
        subject: 'أهمية تدريب المتحدثين قبل البث',
        impact_level: 'مرتفع',
        can_join: true, // عشان لو عاوزه تتحكمي في ظهور زرار "انضم"
      },
      {
        id: 2,
        project: 'تطوير القيادات',
        date: '20 نوفمبر',
        time: '08:30 مساءً',
        consultant: 'سارة أحمد',
        verification_method: 'أونلاين',
        subject: 'إدارة فرق العمل عن بعد',
        impact_level: 'متوسط',
        can_join: false,
      },
      {
        id: 3,
        project: 'تمكين المرأة',
        date: '01 ديسمبر',
        time: '04:00 مساءً',
        consultant: 'د. ليلى خليل',
        verification_method: 'حضوري',
        subject: 'ريادة الأعمال للمبتدئات',
        impact_level: 'ضعيف',
        can_join: false,
      },
      {
        id: 4,
        project: 'عباق (الجلسة الثانية)',
        date: '15 نوفمبر',
        time: '11:00 مساءً',
        consultant: 'عبدالله',
        verification_method: 'الحالة',
        subject: 'مراجعة المخرجات النهائية',
        impact_level: 'مرتفع',
        can_join: true,
      },
    ];
    this.data.set(rawData);
  }

  bodytabel() {
  return [
    { key: 'المشروع', value: 'project' },
    { key: 'التاريخ', value: 'date' },
    { key: 'الوقت', value: 'time' },
    { key: 'المستشار', value: 'consultant' },
    { key: 'وسيلة التحقق', value: 'verification_method' },
    { key: 'الموضوع', value: 'subject' },
  ];
}














}
