import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
//variables globales
verf = false;
usuario: any;

userr={
  nombre:"",
  usuario:"",
  clave:"",
  tipo:""
};


constructor (private suser: UsuarioService){ }

ngOnInit(): void {
    this.consulta();
    this.limpiar();
}


//mostrar formulario
mostrar(dato:any) {
switch(dato){
  case 0:
  this.verf = false;
  break;
  case 1:
  this.verf = true;
  break;
}
}

//limpiar
limpiar(){
  this.userr.nombre = "";
  this.userr.usuario = "";
  this.userr.clave = "";
  this.userr.tipo = "";
}

//para validar
validnombre = true;
validusuario = true;
validclave = true;
validtipo = true;

//validar
validar(){
  if (this.userr.nombre == "") {
    this.validnombre = false;
  }else{
    this.validnombre = true;
  }

  if (this.userr.usuario == "") {
    this.validusuario = false;
  }else{
    this.validusuario = true;
  }

  if (this.userr.clave == "") {
    this.validclave = false;
  }else{
    this.validclave = true;
  }

  if (this.userr.tipo == "") {
    this.validtipo = false;
  }else{
    this.validtipo = true;
  }
}

consulta() {
this.suser.consultar().subscribe((result:any) =>
  {
    this.usuario = result;
    // console.log(this.usuario);
  }
)
}

ingresar(){

this.validar();

if (this.validnombre==true && this.validusuario==true && this.validclave==true && this.validtipo==true) {
  this.suser.insertar(this.userr).subscribe((datos:any)=> {
    if (datos['resultado']=='OK') {
    this.consulta();
    }

      }

      );
      this.mostrar(0);
      this.limpiar();

}


}

// sweetAlert2

pregunta(id:any, nombre:any){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: '¿Estás seguro de borrar el usuario ' +nombre + '?' ,
    text: "El proceso no podrá ser revertido!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, Eliminar!',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: true
  }).then((resultpregunta) => {
    if (resultpregunta.isConfirmed) {
      this.borrarusuario(id);
      swalWithBootstrapButtons.fire(
        'Eliminado!',
        'El usuario ha sido eliminado.',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      resultpregunta.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu archivo esta seguro',
        'error'
      )
    }
  })
}

// borrarusuario
borrarusuario(id:any){
  this.suser.eliminar(id).subscribe((datos:any) => {

    if (datos['resultado']=='OK') {
      this.consulta();
    }
  });
}


}
