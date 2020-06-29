import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FrutaImagenService {



  constructor( private http: HttpClient) { 
    console.log(" servicio");
  }

  getImgFruta(){
    const url = `https://ruletafrutas.firebaseio.com/frutas.json`;
    
    return this.http.get(url)
  }
}
