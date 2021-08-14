import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AboutusComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule
  ]
})
export class AboutusModule { }
