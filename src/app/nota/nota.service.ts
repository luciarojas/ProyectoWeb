import { Injectable } from '@angular/core';
import {Nota} from './nota';
import { Rubro } from '../rubro/rubro';
@Injectable({
  providedIn: 'root'
})
export class NotaService {
  public rubros: Rubro[];
  public status: string;
  constructor() {
    this.rubros = [];
  }
  all() {
  	return this.rubros;
  }

  delete(id: number) {
  	this.rubros = this.rubros.filter((p) => p.id !== id);
  	return this.rubros;
  }

  add(rubro: Rubro) {
    this.rubros.push(rubro);
  }

  edit(rubro: Rubro) {
  	this.rubros = this.rubros.filter((p) => p.id !== rubro.id);
    this.rubros.push(rubro);
    return this.rubros;
  }
}
