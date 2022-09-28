import { Component, OnInit } from '@angular/core';
import {ConexionPhpService} from '../Service/conexion-php.service';

@Component({
  selector: 'app-upload-archivos',
  templateUrl: './upload-archivos.component.html',
  styleUrls: ['./upload-archivos.component.css']
})
export class UploadArchivosComponent implements OnInit {
  
  TipoArchivo = false;
  SubidaCorrecta = false;
  usuarios:any;
  Id_User = 0;
 
  archivo={
    nombre: null,
    nombreUsuario:null,
    nombreArchivo: null,
    base64textString: null,
    usuario_id: null,
    typeArchivo : null
}

products = null;
product = {
  id_platillo:null,
  name:null,
  ingredientes:null,
  imagen:null
}

usuario={
  id_usuarios:null,
  name:null,
  contrasena:null
}

usuarioArchivos = null;
usuarioArchivo={
  USUARIO_ID :null,
  Nombre_Archivo:null,
  Tipo_Archivo:null
}

  constructor(private uploadService: ConexionPhpService) { }
  

  ngOnInit(): void {

    this.obtenerusuario();
    this.obtenerId();
  }

  seleccionarArchivo(event) {
   
    var files = event.target.files;
    var file = files[0];
    this.archivo.nombreArchivo = file.name;
    if((file.type == "application/pdf" || file.type == "application/msword" || file.type =="image/jpg" ||file.type == "image/png"  
    ||file.type =="application/vnd.openxmlformats-officedocument.wordprocessingml.document") && file.size<= 3145728)
    {
    this.TipoArchivo = true;
    if(files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  else
  {
    this.TipoArchivo = false;
  }
  }

  _handleReaderLoaded(readerEvent) {
    var binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }

  upload() {
    
    if(this.TipoArchivo)
    {
    console.log(this.archivo);
    this.uploadService.uploadFile(this.archivo).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          this.altaArchivo();
          alert(datos['mensaje']);
          
        }
        else{
          alert("Error");
        }
      }
    );


    }
    else
    {
        alert("Tipo de archivo no soportado");
    }
  }

altaArchivo() {
        this.uploadService.altaArchivo(this.archivo).subscribe(
          datos => {
            if(datos['resultado'] == 'OK') {
              alert(datos['mensaje']);
             
            }
            else{
              alert("Error");
            }
          }
        );
      }

  obtenerusuario()
  {
    var apoyo = null;
    this.uploadService.obtenerUsuarios().subscribe(
      result => this.usuarios = result
    );
   
  }

 

  
	onSelected(value:string): void {
    
    this.archivo.usuario_id = value;
    this.Id_User = Number(value);
    this.obtenerId();
	}

  onSelected2(value:string): void {
    this.archivo.typeArchivo = value;
	}
  obtenerId(){
   
    this.uploadService.seleccionarArchivoUsuario().subscribe(
      result => this.usuarioArchivos = result
    );
    
   
  }
}

