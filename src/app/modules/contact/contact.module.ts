import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactMainComponent } from './components/contact-main/contact-main.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    ContactMainComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
