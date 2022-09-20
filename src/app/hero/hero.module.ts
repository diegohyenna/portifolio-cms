import { HeroComponent } from './hero.component';
import { HomeModule } from './../home/home.module';
import { HeroRoutingModule } from './hero-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, HeroRoutingModule, HomeModule],
  exports: [HeroComponent],
})
export class HeroModule {}
