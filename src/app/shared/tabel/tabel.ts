import { DatePipe } from '@angular/common';
import {
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  signal,
  TemplateRef,
} from '@angular/core';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'app-tabel',
  standalone: false,
  templateUrl: './tabel.html',
  styleUrl: './tabel.scss',
})
export class Tabel<T extends object> {
  constructor(private datePipe: DatePipe) {}
  tableData: T[] = [];
  statusData = signal<string>('');
  loadingData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  @Input() bodytabel: any[] = [];
  @Input()
  set data(value: T[]) {
    this.tableData = value ?? [];
  }

  @Input()
  set status_data(value: string) {
    this.statusData.set(value);
  }

  formatCell(key: string, value: any): string {
    let ArraDate = ['createdAt', 'updatedAt'];
    let timeFields = ['startTime', 'endTime'];
    if (ArraDate.includes(key)) {
      return this.datePipe.transform(value, 'shortDate') || '';
    }
    if (timeFields.includes(key)) {
    }
    return value;
  }



  
  @ContentChildren(PrimeTemplate) templates!: QueryList<PrimeTemplate>;
  getTemplate(colValue: string): TemplateRef<any> | null {
    const template = this.templates.find((t) => t.getType() === colValue);
    return template ? template.template : null;
  }
}
