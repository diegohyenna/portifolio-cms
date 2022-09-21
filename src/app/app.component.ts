import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Svg, ISvg } from './shared/components/toolbar/logo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  brand!: string;
  logo!: ISvg;

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
    placeholder: 'Enter text here...',
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
    uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    // toolbarHiddenButtons: [
    //   ['bold', 'italic'],
    //   ['fontSize']
    // ]
  };

  myGroup!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.brand =
      '<strong class="header__content-title">Jupiter</strong><small class="header__content-subtitle">CMS do meu <a class="header__content-link " href="https://dgsite.web.app" target="_blank"> Portifólio</a></small>';

    this.logo = Svg;
    this.myGroup = new FormGroup({
      htmlContent: new FormControl(),
    });
  }
}
