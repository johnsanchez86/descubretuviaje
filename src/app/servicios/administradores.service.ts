import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresService {

  url='http://localhost/prodescubre/src/app/php/administradores/';

  constructor(private http:HttpClient) { }

consultar () {
  return this.http.get('${this.url}consulta.php');
}

insertar (articulo:any) {
  return this.http.post('${this.url}insertar.php', JSON.stringify(articulo));
}

eliminar (id:number) {
  return this.http.get('${this.url}eliminar.php?id=${id}');
}

editar (datos:any) {
  return this.http.post('${this.url}editar.php', JSON.stringify(datos));
}

}