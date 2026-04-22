import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  visiblePopupLogout = signal<boolean>(false);
  visible2: boolean = false;
  OnToggel() {
    this.visible2 = !this.visible2;
  }

  onLogout() {
    this.visiblePopupLogout.set(true);
  }

  onCloseLogout(){
     this.visiblePopupLogout.set(false);
  }
}
