import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ConexionPhpService {
  URL = "http://localhost:8080/p/";
  objeto = null;
  constructor(private http: HttpClient) { }

  uploadFile(archivo) {
    return this.http.post(`${this.URL}subirArchivo.php`, JSON.stringify(archivo));
  }
  obtenerUsuarios() {
    return this.http.get(`${this.URL}ObtenerUsuarios.php`);
  }

  altaArchivo(usuario) {
    return this.http.post(`${this.URL}AltaArchivo.php`, JSON.stringify(usuario));
  }

   seleccionarArchivoUsuario() {
    return this.http.get(`${this.URL}SeleccionarArchivoUsuario.php`);
  }
}
