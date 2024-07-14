import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'

//importar el crud.service
import { CrudService } from 'src/app/servicio/crud.service';
//importar las rutas para redireccionar
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;


  //recibiendo los datos del formulario en el constructor
  constructor(public formulario:FormBuilder, private crudService:CrudService, private ruteador:Router) { 
  this.formularioDeEmpleados=this.formulario.group({
    nombre:[''],
    correo:['']
  });

  }

  ngOnInit(): void {
  }

  enviarDatos():any{
  console.log("me presionaste");
  console.log(this.formularioDeEmpleados.value);
  //suscribe es para que se ejecute la in struccion
  this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe(respuesta=>{
    this.ruteador.navigateByUrl('/listar-empleado');
  });
  }

}
