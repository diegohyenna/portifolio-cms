import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from './services/login/login.service';
import { Svg, ISvg } from './shared/components/toolbar/logo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  brand!: string;
  logo!: ISvg;

  links: any = [];

  sidenavOpen = false;

  constructor(private router: Router, private loginService: LoginService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (!this.loginService.isLogged()) {
          this.router.navigate(['/login']);
          this.sidenavOpen = false;
        } else {
          this.sidenavOpen = true;
        }
      }
    });
  }

  ngOnInit(): void {
    this.brand =
      '<strong class="header__content-title">Jupiter</strong><small class="header__content-subtitle">CMS do meu <a class="header__content-link " href="https://dgsite.web.app" target="_blank"> Portifólio</a></small>';

    this.logo = Svg;

    this.links = [
      {
        href: '/home',
        title: 'Início',
        icon: 'home',
      },
      {
        href: '/hero',
        title: 'Hero',
        icon: 'diamond',
      },
      {
        href: '/about',
        title: 'Sobre',
        icon: 'face',
      },
      {
        href: '/project',
        title: 'Projetos',
        icon: 'folder',
      },
      {
        href: '/footer',
        title: 'Rodapé',
        icon: 'dataset',
      },
    ];
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
