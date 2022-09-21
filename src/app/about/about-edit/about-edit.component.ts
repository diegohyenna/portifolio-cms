import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.scss'],
})
export class AboutEditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {}

  onBack() {
    this.location.back();
  }
}
