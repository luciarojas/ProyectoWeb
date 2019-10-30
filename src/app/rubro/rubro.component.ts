import { Component, OnInit } from '@angular/core';

import { Rubro } from './rubro';
import {RubroService } from './rubro.service';
import {Rubrounidad} from './rubrounidad';

@Component({
  selector: 'app-rubro',
  templateUrl: './rubro.component.html',
  styleUrls: ['./rubro.component.css']
})

export class RubroComponent implements OnInit {
  public rubros: Rubro[];
  public rubrosunidad:Rubrounidad;
  public tareaUnidad;
  public tareas = [];
  public show_form = false;
  /* public show_form = false; */
  public mnjs:Boolean;

  public resultado:number;
  public sumaPorcentaje:number = 0;
  public current_rubro: Rubro;
  static _id: number = 0;


  constructor(private service: RubroService) { }
/*se ejecuta desdel principio*/
  ngOnInit() {
    this.rubros = this.service.all();
    this.current_rubro = new Rubro();
    this.rubrosunidad = new Rubrounidad
  }

/*edita los valores de los rubros*/
  edit(rubro){
  	this.show_form = true;
  	this.current_rubro = rubro;
    this.current_rubro.is_new = false;

      
  }

  add(){
    this.show_form = true;
    this.current_rubro.is_new = true;
    this.current_rubro = new Rubro();
    
  }
/*Guarda o editoa dependiendo se el rubro.is_new es true o false */
  save(){
  
    if(this.current_rubro.tipo==null ||this.current_rubro.descripcion==null ||this.current_rubro.porcentaje==null ||this.current_rubro.porcentaje <=0 ){
      alert('verifique sus datsos');
    }else if(this.current_rubro.is_new){    
      this.current_rubro.id = RubroComponent._id++;
      this.current_rubro.nota =0;
      this.current_rubro.porobpentido = 0;
      this.service.add(this.current_rubro);
      this.show_form = false;/*esto no estaba aqui*/ 
      this.sumatoria();
    }
    else {
      this.rubros = this.service.edit(this.current_rubro);
      this.show_form = false;/*esto no estaba aqui*/ 
      this.sumatoria();
    }
  }
/* Elimina el rubro seleccionada*/ 
  delete(rubro){
    this.rubros = this.service.delete(rubro.id);
    this.sumatoria();
  }
/**Saca la suma de los porcentajes totales que tiene el arreglo */
  sumatoria(){
    this.sumaPorcentaje = 0;
     for (let i = 0; i < this.rubros.length; i++) {
        this.sumaPorcentaje = this.sumaPorcentaje + this.rubros[i].porcentaje;
      }
 
      if(this.sumaPorcentaje === 100) {
        this.mnjs = true;
        this.show_form = false;
        /*this.save();*/
       
        }else{

          this.mnjs = false;
        }
  
  }
}
