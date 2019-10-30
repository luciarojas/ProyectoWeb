import { Injectable } from '@angular/core';
import { Rubro } from './rubro';

@Injectable({
  providedIn: 'root'
})
export class RubroService {
  public rubros: Rubro[];
  public status: string;
  constructor() {
    this.rubros = [];
  	/*let rubro = new Rubro();
  	rubros.id = '01';
  	rubros.tarea = '10';
  	rubros.quice = 5;
    rubros.examen = 70;
    rubros.proyecto = 15;
    rubros.exposicion = 5;
  	this.rubros.push(rubro);*/
   }

   
  all() {
  	return this.rubros;
  }

  delete(id: number) {
  	this.rubros = this.rubros.filter((p) => p.id !== id);
  	return this.rubros;
  }

  add(rubro: Rubro) {
    this.status='holis';
    this.rubros.push(rubro);
    return this.status;
  }

  edit(rubro: Rubro) {
  	this.rubros = this.rubros.filter((p) => p.id !== rubro.id);
    this.rubros.push(rubro);
    return this.rubros;
  }
}
