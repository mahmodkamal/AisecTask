import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OppCardComponent } from '../opp-card.component';

const routes: Routes = [
  {
    path:'',
    component:OppCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OppRoutingModule { }
