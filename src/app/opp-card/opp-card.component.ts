import { ModalComponent } from './modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OppSerService } from '../services/opp/opp-ser.service';
@Component({
  selector: 'opp-card',
  templateUrl: './opp-card.component.html',
  styleUrls: ['./opp-card.component.scss']
})
export class OppCardComponent implements OnInit {
  opps :Array<any> = [];
  constructor(private modalService:NgbModal,private oppSer:OppSerService) { }

  ngOnInit() {
    this.oppSer.Get_Opp().subscribe(data=>{
      this.opps = <any>data
      console.log(this.opps);
    })
  }
  open(opp)
  {
    const modalref =  this.modalService.open(ModalComponent,opp);
    modalref.componentInstance.opp = opp;
  }

}
