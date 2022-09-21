import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutEditComponent } from './about-edit/about-edit.component';

@NgModule({
  declarations: [AboutComponent, AboutEditComponent],
  imports: [CommonModule, AboutRoutingModule],
  exports: [AboutComponent, AboutEditComponent],
})
export class AboutModule {}
