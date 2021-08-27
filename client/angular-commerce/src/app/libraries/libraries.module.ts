import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrariesRoutingModule } from './libraries-routing.module';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { ChartjsComponent } from './chartjs/chartjs.component';


@NgModule({
  declarations: [
    PdfviewerComponent,
    ChartjsComponent
  ],
  imports: [
    CommonModule,
    LibrariesRoutingModule
  ]
})
export class LibrariesModule { }
