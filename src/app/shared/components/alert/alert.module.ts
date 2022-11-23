import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, MatSnackBarModule, MatButtonModule],
  exports: [AlertComponent],
})
export class AlertModule {}
