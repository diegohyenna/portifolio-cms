import { Component, OnInit } from '@angular/core';
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

  constructor() {}

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
}
