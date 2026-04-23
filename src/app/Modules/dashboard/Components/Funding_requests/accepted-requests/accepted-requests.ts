import { Component } from '@angular/core';

@Component({
  selector: 'app-accepted-requests',
  standalone: false,
  templateUrl: './accepted-requests.html',
  styleUrl: './accepted-requests.scss',
})
export class AcceptedRequests {
fundingRequestsData: any[] = [
  {
    associationName: 'ولادة حلم',
    projectName: 'منح جامعية',
    receivingDate: '25 أكتوبر 2026',
    status: 'جديد',
    statusClass: 'interested-status'
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
    statusClass: 'interested-status'
  },
  {
    associationName: 'ولادة حلم',
    projectName: 'منح جامعية',
    receivingDate: '25 أكتوبر 2026',
    status: 'مرفوض من الجمعية',
    statusClass: 'interested-status'
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
