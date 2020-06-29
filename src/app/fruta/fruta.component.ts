import { Component, OnInit, Output } from '@angular/core';
import { FrutaModel } from '../Model/Fruta.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FrutaImagenService } from '../services/fruta-imagen.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styles: [
  ]
})
export class FrutaComponent implements OnInit {

  img:FrutaModel = new FrutaModel();
  cadena1:string = 'https://firebasestorage.googleapis.com/v0/b/ruletafrutas.appspot.com/o/0.png?alt=media&token=2545d06f-e43e-40b7-a81b-8cfe02b23634';
  cadena2:string = `assets/img/${Math.floor(Math.random() * (0 - 7 + 1) + 7)}.png`;
  cadena3:string = "https://firebasestorage.googleapis.com/v0/b/ruletafrutas.appspot.com/o/0.png?alt=media&token=2545d06f-e43e-40b7-a81b-8cfe02b23634";
  
  titulo = "Jugar";

  nom1:any ;
  nom2:any ;
  nom3:any ;

  

  constructor( private fruta:FrutaImagenService) { 

  }

  ngOnInit(): void {

    this.cadena1 = "https://firebasestorage.googleapis.com/v0/b/ruletafrutas.appspot.com/o/0.png?alt=media&token=2545d06f-e43e-40b7-a81b-8cfe02b23634";
    this.cadena2 = "https://firebasestorage.googleapis.com/v0/b/ruletafrutas.appspot.com/o/0.png?alt=media&token=2545d06f-e43e-40b7-a81b-8cfe02b23634";
    this.cadena3 = "https://firebasestorage.googleapis.com/v0/b/ruletafrutas.appspot.com/o/0.png?alt=media&token=2545d06f-e43e-40b7-a81b-8cfe02b23634";
 
    this.nom1 = 'fruta1';
    this.nom2 = 'fruta2';
    this.nom3 = 'fruta3';
    
  }


  random() { 
    this.titulo = "";

    let i1 = Math.floor(Math.random() * (0 - 7 + 1) + 7);
    let i2 = Math.floor(Math.random() * (0 - 7 + 1) + 7);
    let i3 = Math.floor(Math.random() * (0 - 7 + 1) + 7);
    this.fruta.getImgFruta().subscribe(
      frutas =>{
        this.cadena1 = frutas[i1].url;
        this.nom1    = frutas[i1].nombre;
        this.cadena2 = frutas[i2].url;
        this.nom2    = frutas[i2].nombre;
        this.cadena3 = frutas[i3].url;
        this.nom3    = frutas[i3].nombre;
        if(this.nom1 === this.nom2 && this.nom2 === this.nom3 && this.nom1 === this.nom3 ){
          console.log('this.nom1' ,this.nom1);
          console.log('this.nom2' ,this.nom2);
          this.titulo = "GANO";
        }else{
          this.titulo = "PERDIO";
        }
      }
    )

    

    
  }

 



  /* funfrutas(){

    let i1 = Math.floor(Math.random() * (0 - 7 + 1) + 7);
    let i2 = Math.floor(Math.random() * (0 - 7 + 1) + 7);
    let i3 = Math.floor(Math.random() * (0 - 7 + 1) + 7);
    //console.log("random",i);
   // let variable:any = "";
    this.fruta.getImgFruta().subscribe(
      frutas =>{
        this.imagenUrl1 = frutas[i1].url;
        this.imagenUrl2 = frutas[i2].url;
        this.imagenUrl3 = frutas[i3].url;
      }
      )
      
      //return this.imagenUrl;
  } */
}
