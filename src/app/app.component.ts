import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Jupiter - Portifólio CMS';
  links = [
    {
      href: '/home',
      title: 'home',
    },
    {
      href: '/hero',
      title: 'hero',
    },
    {
      href: '/about',
      title: 'about',
    },
  ];

  showInfo(link: any) {}
}
