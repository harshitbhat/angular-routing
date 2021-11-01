import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent } from './components/about-main/about-main.component';
import { BioComponent } from './components/bio/bio.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TeamComponent } from './components/team/team.component';


@NgModule({
  declarations: [
    AboutMainComponent,
    BioComponent,
    ClientsComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
