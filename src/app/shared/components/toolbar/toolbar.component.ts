import { ISvg } from './logo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input('brand') brand!: string;
  @Input('logo') logo!: ISvg;
  showLogout = false;

  @Output('onLogout') onLogout: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (this.loginService.isLogged()) {
          this.showLogout = true;
        } else {
          this.showLogout = false;
        }

        // this.loginService.isLogged().then((response) => {
        //   console.log(response);
        //   if (response) {
        //     this.showLogout = true;
        //   } else {
        //     this.showLogout = false;
        //   }
        // });
      }
    });
  }

  logout() {
    this.onLogout.emit(true);
  }
}
