import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import{ RubroComponent } from './rubro/rubro.component';
import{ NotaComponent } from './nota/nota.component';
/*agrego los componentes*/

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rubro', component: RubroComponent },
  { path: 'nota', component: NotaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
