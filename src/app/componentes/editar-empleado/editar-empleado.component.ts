import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'

//importar el crud.service
import { CrudService } from 'src/app/servicio/crud.service';
//importar las rutas para redireccionar
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;
  elID:any;

  constructor(private activateroute:ActivatedRoute,private crudService:CrudService, public formulario:FormBuilder, private ruteador:Router) {
    this.elID=this.activateroute.snapshot.paramMap.get('id');
    console.log(this.elID);
    //recibiendo el id del empleado
    this.crudService.ObtenerEmpleado(this.elID).subscribe(respuesta=>{
      console.log(respuesta); 
      this.formularioDeEmpleados.setValue({
        nombre:respuesta[0]['nombre'],
        correo:respuesta[0]['correo'],
      });
    });
    this.formularioDeEmpleados=this.formulario.group({nombre:[''],correo:['']});
   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeEmpleados.value);
    this.crudService.EditarEmpleado(this.elID,this.formularioDeEmpleados.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-empleado');
    });
  }
  


}
