import { Component, ViewChild } from '@angular/core';
import {UploadArchivosComponent} from './upload-archivos/upload-archivos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenIngreso';

  @ViewChild(UploadArchivosComponent) uploadArchivosComponent: UploadArchivosComponent;
}
