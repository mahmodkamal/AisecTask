import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


const Headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }),
};

const TOKEN = 'dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&api_key=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c';

const ENT_POINT='http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/8487/?access_token='+TOKEN;
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  get()
  {
    return this.http.get(ENT_POINT,Headers);
  }
  put(body)
  {
    return this.http.put(ENT_POINT,body,Headers);
  }
}
