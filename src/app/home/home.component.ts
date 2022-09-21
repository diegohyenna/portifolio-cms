import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user = 'visitante';

  myForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.myForm = new FormGroup({
      rickTextEditor: new FormControl(),
    });
  }
  onChanges(event: any) {
    console.log(event);
  }
}
