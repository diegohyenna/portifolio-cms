import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title =
    '<h1 class="header__brand-title">Jupiter - CMS do meu <a class="header__brand-link " href="https://dgsite.web.app" target="_blank"> Portifólio</a></h1>';
  links = [
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

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Digite o texto aqui...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    // uploadUrl: 'v1/image',
    // uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    // toolbarHiddenButtons: [
    //   ['bold', 'italic'],
    //   ['fontSize']
    // ]
  };

  showInfo(link: any) {}
}
