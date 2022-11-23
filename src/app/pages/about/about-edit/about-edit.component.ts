import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.scss'],
})
export class AboutEditComponent implements OnInit {
  myFormGroup!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private myFormBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myFormGroup = this.myFormBuilder.group({
      profileImage: ['', [Validators.required]],
      profileName: ['', [Validators.required]],
      profileOccupation: ['', [Validators.required]],
      profileContact: ['', [Validators.required]],
      profileLinks: ['', [Validators.required]],
    });
  }

  onBack() {
    this.location.back();
  }

  getErrorMessage() {
    if (this.myFormGroup.get('profileImage')?.hasError('required')) {
      return 'Esse campo é obrigatório!';
    }
    return;
  }
}
