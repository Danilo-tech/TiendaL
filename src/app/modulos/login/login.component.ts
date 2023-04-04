import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

email:any;
clave:any;
usuario:any;
error=false;
user = {
  nombre: "",
  usuario:"",
  clave: "",
  tipo:"",
}

  constructor(private slogin: LoginService, private router:Router){

  }

  ngOnInit():void {

  }

  consulta() {
    this.slogin.consultar(this.email,this.clave).subscribe((result:any) =>
      {
        this.usuario = result;
        console.log(this.usuario);
      }
    )
    }

}
