import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.html',
  styleUrl: './logout.scss',
})
export class Logout {
  visible: boolean = false;
  @Output() DilogChange = new EventEmitter<boolean>();
  @Input()
  set openDilog(value: boolean) {
    this.visible = value;
  }

  onDialogCloseHandler(){
    this.visible = false;
    this.DilogChange.emit(false);
  }
}
