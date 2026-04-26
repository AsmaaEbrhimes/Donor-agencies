import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dilog-filter-projects',
  standalone: false,
  templateUrl: './dilog-filter-projects.html',
  styleUrl: './dilog-filter-projects.scss',
})
export class DilogFilterProjects {
  visible: boolean = false;
  @Output() DilogChange = new EventEmitter<boolean>();
  @Input()
  set openDilog(value: boolean) {
    this.visible = value;
  }
  onDialogCloseHandler() {
    this.visible = false;
    this.DilogChange.emit(false);
  }
}
