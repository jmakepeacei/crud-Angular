import { Injectable } from '@angular/core';

//importando el cliente para comunicar la api
import { HttpClient } from '@angular/common/http';
//importando el monitor
import { Observable } from 'rxjs';
//importar el modelo empleado
import { Empleado } from './Empleado';
import { EventManager } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
//variable API para conectarse al servicio
//API:string = 'https://gtsistemas.com/empleados/';
API:string = 'http://localhost/empleados/';


  constructor(private clienteHttp:HttpClient) { }

AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
}

ObtenerEmpleados(){
  return this.clienteHttp.get(this.API);
}

BorrarrEmpleado(id:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?borrar="+id);
}

ObtenerEmpleado(id:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?consultar="+id);
}

EditarEmpleado(id:any,datosEmpleado:any):Observable<any>{
  return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado);
}

}
