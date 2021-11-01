import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './components/home-main/home-main.component';

@NgModule({
  declarations: [HomeMainComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeMainComponent],
})
export class HomeModule {}
