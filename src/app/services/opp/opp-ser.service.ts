import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OppSerService {

  constructor(private http:HttpService) { }

  Get_Opp()
  {
    return this.http.get();
  }
  Update_Opp(body)
  {
    return this.http.put(body);
  }
}
