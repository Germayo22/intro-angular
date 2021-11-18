import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase01',
  templateUrl: './clase01.component.html',
  styleUrls: ['./clase01.component.scss']
})
export class Clase01Component implements OnInit {
  frutas:Array<string | number> = ['Manzana', 'Pera', 'Melon', 'Frutilla', 'Durazno', 500];
  numero:number | string = 300;
  persona: Persona = { nombre: 'Juan', apellido: 'Perez', vip: true };
  clase: string = 'd-block';
  cualquiera: any = 50;
  nulo: null = null;
  indefinido: undefined;

  constructor() {
    this.numero = '500';
    this.cualquiera = '50';
    this.cualquiera = true;
    this.cualquiera = {};
   }

  obtenerNombre() {
    return this.persona.nombre;
    }
  
  onClick() {
    this.clase = 'd-none';
  }

}


interface Persona extends PersonaVip {
  nombre: string;
  apellido: string;
}

interface PersonaVip {
  vip: true;
}



