import { ISvg } from './logo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input('brand') brand!: string;
  @Input('logo') logo!: ISvg;

  constructor() {}

  ngOnInit(): void {}
}
