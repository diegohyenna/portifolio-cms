import { RichtextEditorModule } from '../../shared/components/richtext-editor/richtext-editor.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RichtextEditorModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
