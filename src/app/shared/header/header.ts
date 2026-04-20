import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
    visible2: boolean = false;
OnToggel(){
  this.visible2 = !this.visible2; 
}
}
