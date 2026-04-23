import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-funding-requests',
  standalone: false,
  templateUrl: './funding-requests.html',
  styleUrl: './funding-requests.scss',
})
export class FundingRequests {
fundingRequestsData: any[] = [
  {
    associationName: 'ولادة حلم',
    projectName: 'منح جامعية',
    receivingDate: '25 أكتوبر 2026',
    status: 'جديد',
    statusClass: 'new-status'
  },
  {
    associationName: 'ولادة حلم',
    projectName: 'منح جامعية',
    receivingDate: '25 أكتوبر 2026',
    status: 'اهتمام بالمشروع (بدون تمويل)',
    statusClass: 'interested-status'
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
