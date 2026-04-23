import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';

@Component({
  selector: 'app-taps',
  standalone: false,
  templateUrl: './taps.html',
  styleUrl: './taps.scss',
})
export class Taps implements OnInit {
  @Output() nextTap = new EventEmitter<boolean>();
index=signal<any>(0)
  ngOnInit(): void {
    this.ShowTabst();
  }

  ShowTabst(): any[] {
    return [
      { name: 'طلبات التمويل' },
      { name: 'الردود الجديدة' },
      { name: 'الطلبات المقبولة' },
      { name: 'الطلبات المرفوضة' },
    ];
  }

  onNextTap(index: any) {
    this.index.set(index)
    this.nextTap.emit(index);
  }
}
