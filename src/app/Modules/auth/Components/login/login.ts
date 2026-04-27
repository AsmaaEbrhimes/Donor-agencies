import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Data } from '../../../../core/Servies/data';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
 Form = signal<FormGroup>(new FormGroup({}));

  constructor(private _fb: FormBuilder, private Data: Data,private _activatedRoute: ActivatedRoute,private _router: Router) {}

  ngOnInit(): void {
    this.generateForm();
  }


  generateForm() {
    this.Form.set(this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }));
  }

  login() {
    if(this.Form().invalid){
      this.Form().markAllAsTouched()
      return;
    }
    this.Data.post('auth/company/login',this.Form().value).subscribe((res)=>{
      console.log(res);
    })
  }

    getControlName(controlName: string) {
    return this.Form().get(controlName);
  }
}




// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-M3WD6PLM');</script>
// <!-- End Google Tag Manager -->


// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M3WD6PLM"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->
