import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  data = signal<any>([]);
  visiblePopupFilter = signal<boolean>(false);

  ngOnInit(): void {
    this.getData();
    this.bodytabel();
  }

  getData() {
    const data = [
      {
        project_name: 'السعودية الخضراء',
        owner_org: 'وزارة البيئة والمياه والزراعة',
        project_manager: 'نورة الشهري',
        beneficiaries_count: 50000,
        status: 'مكتملة', // يمكن استخدامها للتحكم في لون الـ badge
        approved_funding: 50000,
        completion_percentage: '100%',
      },
      {
        project_name: 'السعودية الخضراء',
        owner_org: 'وزارة البيئة والمياه والزراعة',
        project_manager: 'نورة الشهري',
        beneficiaries_count: 50000,
        status: 'جارية',
        approved_funding: 50000,
        completion_percentage: '100%',
      },
      {
        project_name: 'السعودية الخضراء',
        owner_org: 'وزارة البيئة والمياه والزراعة',
        project_manager: 'نورة الشهري',
        beneficiaries_count: 50000,
        status: 'متأخر',
        approved_funding: 50000,
        completion_percentage: '100%',
      },
      {
        project_name: 'السعودية الخضراء',
        owner_org: 'وزارة البيئة والمياه والزراعة',
        project_manager: 'نورة الشهري',
        beneficiaries_count: 50000,
        status: 'جارية',
        approved_funding: 50000,
        completion_percentage: '100%',
      },
      {
        project_name: 'السعودية الخضراء',
        owner_org: 'وزارة البيئة والمياه والزراعة',
        project_manager: 'نورة الشهري',
        beneficiaries_count: 50000,
        status: 'متأخر',
        approved_funding: 50000,
        completion_percentage: '100%',
      },
      {
        project_name: 'السعودية الخضراء',
        owner_org: 'وزارة البيئة والمياه والزراعة',
        project_manager: 'نورة الشهري',
        beneficiaries_count: 50000,
        status: 'متأخر',
        approved_funding: 50000,
        completion_percentage: '100%',
      },
    ];
    this.data.set(data);
  }

  bodytabel() {
    return [
      { key: 'المشروع', value: 'project_name' },
      { key: 'المؤسسة المالكة', value: 'owner_org' },
      { key: 'مدير المشروع', value: 'project_manager' },
      { key: 'عدد المستفيدين', value: 'beneficiaries_count' },
      { key: 'حالة المشروع', value: 'status' },
      { key: 'التمويل المعتمد', value: 'approved_funding' },
      { key: 'نسبة الإنجاز', value: 'completion_percentage' },
    ];
  }

  onFilter() {
    this.visiblePopupFilter.set(true);
  }

  onCloseLogout() {
    this.visiblePopupFilter.set(false);
  }
}
