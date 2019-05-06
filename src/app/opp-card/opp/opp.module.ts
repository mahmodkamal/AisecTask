import { HttpService } from './../../services/http/http.service';
import { ModalComponent } from './../modal/modal.component';
import { OppCardComponent } from './../opp-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OppRoutingModule } from './opp-routing.module';
import { OppSerService } from 'src/app/services/opp/opp-ser.service';

@NgModule({
  declarations: [
    OppCardComponent,

  ],
  imports: [
    CommonModule,
    OppRoutingModule,
    NgbModule,
  ],
  providers:[
    HttpService,
    OppSerService
  ]
})
export class OppModule { }
