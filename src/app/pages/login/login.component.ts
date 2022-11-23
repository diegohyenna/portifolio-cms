import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from './../../shared/components/alert/alert.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(
    private myFormBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.myForm = this.myFormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[^ ]+')]],
    });
  }

  onLogin() {
    // this.loginService.setLogin('abc' as any, '123');
    // this.router.navigate(['/home']);
    this.loginService
      .login(
        this.myForm.get('email')?.value,
        this.myForm.get('password')?.value
      )
      .then((response: any) => {
        if (response.status === 'error') {
          this._snackBar.openFromComponent(AlertComponent, {
            data: response.message,
            duration: 5 * 1000,
            panelClass: 'danger',
          });
          return;
        }
        this._snackBar.openFromComponent(AlertComponent, {
          data: response.message,
          duration: 5 * 1000,
          panelClass: 'success',
        });
        this.router.navigate(['/home']);
      })
      .catch((response: any) => {
        this._snackBar.openFromComponent(AlertComponent, {
          data: response.message,
          duration: 5 * 1000,
          panelClass: 'danger',
        });
      });
  }
}
