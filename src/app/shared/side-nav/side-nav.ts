import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  standalone: false,
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav implements OnInit {
  menue = signal<any>([]);
  ngOnInit(): void {
    this.DataMenue();
  }

  DataMenue() {
    this.menue.set([
      { name: 'لوحة التحكم', icon: 'assets/Svg/dashboard-square-02.svg', active: true},
      { name: 'المحافظ التمويلية', icon: 'assets/Svg/wallet-01.svg', active: false   },
      { name: 'طلبات التمويل', icon: 'assets/Svg/plus-sign-square.svg', active: false   },
      { name: 'المشاريع', icon: 'assets/Svg/clipboard.svg', active: false},
      { name: 'إدارة الشركات', icon: 'assets/Svg/plus-sign-square.svg', active: false   },
      { name: 'الأستشارات', icon: 'assets/Svg/user-group.svg', active: false   },
      { name: 'التقارير', icon: 'assets/Svg/analytics-01.svg', active: false   },
    ])
  }
}
