import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';

const routes: Routes = [
  {
    path: 'pdfviewer',
    component: PdfviewerComponent
  },
  {
    path: 'chart',
    component: ChartjsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrariesRoutingModule { }
