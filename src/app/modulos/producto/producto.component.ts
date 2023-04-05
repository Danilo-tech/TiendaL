import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
//variables globales
verf = false;
producto: any;
idprod: any;

product={
  codigo:"",
  nombre:"",
  ncategoria:"",
  v_compra:0,
  v_venta:0,
  stock:0
};

//para validar
validcodigo = true;
validnombre = true;
validvcompra = true;
validvventa = true;
beditar = false;



constructor (private sproducto: ProductoService){ }

ngOnInit(): void {
    this.consulta();
    //this.limpiar();
}


//mostrar formulario
mostrar(dato:any) {
switch(dato){
  case 0:
  this.verf = false;
  this.beditar = false;
  this.idprod = "";
  //this.limpiar();
  break;
  case 1:
  this.verf = true;
  break;
}
}

//limpiar
/* limpiar(){
  this.userr.nombre = "";
  this.userr.usuario = "";
  this.userr.clave = "";
  this.userr.tipo = "";
}
 */


//validar
/* validar(){
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
} */

consulta() {
this.sproducto.consultar().subscribe((result:any) =>
  {
    this.producto = result;
    // console.log(this.producto);
  }
)
}


}
