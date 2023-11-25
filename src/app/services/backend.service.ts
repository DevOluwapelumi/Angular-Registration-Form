import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public httpclient: HttpClient) { }

sendsignup(obj:any){
return this.httpclient.post('http://localhost/phpclass/backendsignup.php',obj)
}
}
