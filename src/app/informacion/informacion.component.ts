import { Component } from '@angular/core';
import { Pokemon } from '../service/interfaces/pokemon';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent {

  pokemon:Pokemon[]={
    {id:1,nombre:"",descripcion:"",image_url:""},
    {id:2,nombre:"",descripcion:"",image_url:""},
    {id:3,nombre:"",descripcion:"",image_url:""},
    {id:4,nombre:"",descripcion:"",image_url:""},
    {id:5,nombre:"",descripcion:"",image_url:""},
  }

}
