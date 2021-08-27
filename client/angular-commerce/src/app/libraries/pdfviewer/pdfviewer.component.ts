import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import WebViewer from '@pdftron/webviewer';
@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.scss']
})
export class PdfviewerComponent implements OnInit {
  @ViewChild('viewer') viewerRef: ElementRef = new ElementRef(null);
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../../../assets/lib',
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
    }, this.viewerRef.nativeElement).then((instance) => {

    })
  }
}
