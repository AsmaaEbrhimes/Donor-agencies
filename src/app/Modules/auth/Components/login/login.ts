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
