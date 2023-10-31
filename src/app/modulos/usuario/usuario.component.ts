import { Component, OnInit } from '@angular/core';
import { usuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  //variables globales
  verf = false;
  usuario: any;
  user = {
    nombre:  "",
    correo:  "",
    clave:   "",
    celular: "",
    usuario: "",
  };
  //para validar
  validnombre = true;
  validcorreo = true;
  validclave = true;
  validcelular = true;
  validusuario = true;

constructor ( private suser: usuarioService) { }

ngOnInit() : void { 
 this.consulta();
 this.limpiar();
  }

  //mostrar el formulario

  mostrar (dato: any) {
    switch(dato){
      case 0:
        this.verf= false;
        break;
        case 1:
          this.verf= true;
          break;
    }
  }

  //limpiar
  limpiar(){
    this.user.nombre = "";
    this.user.correo = "";
    this.user.clave = "";
    this.user.celular = "";
    this.user.usuario = "";
  }

  //validar
  validar(){
    if(this.user.nombre == ""){
      this.validnombre = false;
    }else{
      this.validnombre = true;
    }

    if(this.user.correo == ""){
      this.validcorreo = false;
    }else{
      this.validcorreo = true;
    }

    if(this.user.clave == ""){
      this.validclave = false;
    }else{
      this.validclave = true;
    }

    if(this.user.celular == ""){
      this.validcelular = false;
    }else{
      this.validcelular = true;
    }

    if(this.user.usuario == ""){
      this.validusuario = false;
    }else{
      this.validusuario = true;
    }

  }

  consulta (){
    this.suser.Consultar().subscribe((result:any) =>{
      this.usuario = result;
     //console.log(this.usuario);
    })
  }

  ingresar (){
    //console.log(this.usuario);
    this.validar();

    if(this.validnombre==true && this.validcorreo==true && this.validclave==true && this.validcelular==true && this.validusuario==true){
  this.suser.insertar(this.user).subscribe((datos:any) => {
    if (datos['resultado'] =='OK'){
        //alert(datos['mensaje']);
        this.consulta ();
        
    }
  });
}

    this.mostrar(0);
    this.limpiar();
  }

  pregunta(id:any, ){
//console.log("entro con el id" + id)
    Swal.fire({
      title: 'Esta seguro de ELIMINAR a el usuario ?',
      text: "Este proceso NO tiene reversa!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrarusuario(id);
        Swal.fire(
          'Eliminado!',
          'Ha sido eliminado con exito.',
          'success'
        )
      }
    })
  }


  borrarusuario(id:any){
    console.log(id);
    
    this.suser.eliminar(id).subscribe((datos:any) =>{
      if(datos['resultado']=='OK'){
        this.consulta();
      }
    });
  }

}