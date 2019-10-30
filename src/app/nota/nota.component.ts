import { Component, OnInit } from '@angular/core';
import { Rubro } from '../rubro/rubro';
import { RubroService } from '../rubro/rubro.service';
import {NotaService} from './nota.service';

import  {Nota} from './nota';
import { from } from 'rxjs';


@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})

export class NotaComponent implements OnInit {
  public rubros: Rubro[];
  public current_rubro: Rubro;
  public show_form = false;
  /* public show_form = false; */
  public mnjs:Boolean;
  public resultado:number;
  public sumaPorcentaje:number = 0;
  public sacarNota:number=0;
  public SacarPorcentaje:number = 0;
  constructor(private service: RubroService) { }

  ngOnInit() {
    this.rubros = this.service.all();
    this.current_rubro = new Rubro();
  }

/*edita el valor de porcentaje y nota*/
edit(rubro){
  this.show_form = true;
  this.current_rubro = rubro;
  this.current_rubro.is_new = false; 
}
/*edita el valor de porcentaje y nota*/
save(){
  
 if(this.current_rubro.is_new){    
    
    this.service.add(this.current_rubro);
    this.show_form = false;
  }
  else {
    if(this.current_rubro.nota==null||this.current_rubro.nota <=0){
      alert('Tiene que tener una nota');
    }else{
      this.current_rubro.porobpentido=(this.current_rubro.nota*this.current_rubro.porcentaje)/100;
      this.rubros = this.service.edit(this.current_rubro);
      this.show_form = false;
      this.SumarPorcentaje();

    }
    

  }
}



/**Saca el porcentaje de la nota digitada y las va sumando */
 SumarPorcentaje(){
 this.sumaPorcentaje=0;
  for (let i = 0; i < this.rubros.length; i++) {
    this.sumaPorcentaje = this.sumaPorcentaje + this.rubros[i].porobpentido;
  }
  console.log( this.sumaPorcentaje);

    /*for (let i = 0; i < this.rubros.length; i++) {
      this.ScarPorcentaje= (this.current_nota.nota*this.rubros[i].porcentaje)/100;
      console.log(this.ScarPorcentaje);
      /*Examen 1 --- vale 25%
        Examen 1 yo me gane 80
        80*25/100=20
      
      */
   /* }*/
/*<>*/
   if(this.sumaPorcentaje>75){
    this.mnjs = true;
    this.show_form = false;
    }else{
      this.mnjs = false;
    }
  }

}