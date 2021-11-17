import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  frutas = ['Manzana', 'Pera', 'Melon', 'Frutilla', 'Durazno'];
  numero = 300;
  persona = { nombre: 'Juan', apellido: 'Perez' };

  constructor() { }

  obtenerFrutas() {}

}
