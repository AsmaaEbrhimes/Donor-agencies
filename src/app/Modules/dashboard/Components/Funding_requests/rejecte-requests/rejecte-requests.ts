import { Component } from '@angular/core';

@Component({
  selector: 'app-rejecte-requests',
  standalone: false,
  templateUrl: './rejecte-requests.html',
  styleUrl: './rejecte-requests.scss',
})
export class RejecteRequests {
fundingRequestsData: any[] = [
  {
    associationName: 'ولادة حلم',
    projectName: 'منح جامعية',
    receivingDate: '25 أكتوبر 2026',
    status: 'جديد',
    statusClass: 'rejected-status'

  },
  {
    associationName: 'ولادة حلم',
    projectName: 'منح جامعية',
    receivingDate: '25 أكتوبر 2026',
    status: 'اهتمام بالمشروع (بدون تمويل)',
    statusClass: 'rejected-status'

  },
  {
    associationName: 'ولادة حلم',
    projectName: 'منح جامعية',
    receivingDate: '25 أكتوبر 2026',
    status: 'مرفوض من الجمعية',
    statusClass: 'rejected-status'
  },
  {
    associationName: 'ولادة حلم',
    projectName: 'منح جامعية',
    receivingDate: '25 أكتوبر 2026',
    status: 'مرفوض من الجمعية',
    statusClass: 'rejected-status'
  }

];




  bodytabel() {
  return [
     { key: 'اسم الجمعية', value: 'associationName' },
    { key: 'اسم المشروع', value: 'projectName' },
    { key: 'تاريخ الاستلام', value: 'receivingDate' },
    { key: 'حالة الطلب', value: 'status' }
  ];
}
}
