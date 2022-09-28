import { ISvg } from './logo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input('brand') brand!: string;
  @Input('logo') logo!: ISvg;

  @Output('onLogout') onLogout: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  logout() {
    this.onLogout.emit(true);
  }
}
