import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule],
  exports: [AboutComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AboutModule {}
