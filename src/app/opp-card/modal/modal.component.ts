import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { OppSerService } from 'src/app/services/opp/opp-ser.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() opp;
  constructor(public activeModal: NgbActiveModal,private oppSer:OppSerService) { }

  ngOnInit() {
    console.log(this.opp);
  }
  update(form:NgForm)
  {
    console.log(form.value);
   const body={
    Name: form.value.Name,
    ShortName: form.value.ShortName,
    Title: form.value.Title,
    Url: form.value.Url,
    address_1:form.value.address_1,
    address_2: form.value.address_2,
    applications_close_date: form.value.applications_close_date,
    city:form.value.city,​
    city_name: form.value.city_name,
    coordination: form.value.coordination,
    country: form.value.country,
    country_code: form.value.country_code,
    country_name: form.value.country_name,
    description:form.value.description,
    duration:form.value.duration,
    duration_max: form.value.duration_max,
    duration_min: form.value.duration_min,
    earliest_start_date: form.value.earliest_start_date,
    email: form.value.email,
    full_name:form.value.full_name,
    impact_date: form.value.impact_date,
    implementation: form.value.implementation,
    latest_end_date: form.value.latest_end_date,
    name:form.value.name,
    partners:form.value.partners,
    postcode: form.value.postcode,
    potential_reach: form.value.potential_reach,
    project_duration:form.value.project_duration,
    scope:form.value.scope,
    signup_link:form.value.signup_link,
    status: form.value.status,
    summary:form.value.summary,
    tag: form.value.tag,
    target:form.value.target,
    url:form.value.url,
    website: form.value.website,
    } 
    this.oppSer.Update_Opp(body).subscribe(data=>{
      console.log(data);
    })
  }
}
