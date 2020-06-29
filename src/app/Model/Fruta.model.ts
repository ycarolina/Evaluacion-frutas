import { Component, OnInit } from '@angular/core';

import { FrutaImagenService } from '../services/fruta-imagen.service';

export class FrutaModel {
    
    imagen:number;

    constructor( ){
        this.imagen = Math.floor(Math.random() * (0 - 7 + 1) + 7);
        
    }

    asignarRandom(){
        //this.imagen = `assets/img/${Math.floor(Math.random() * (0 - 7 + 1) + 7)}.png`;
        //this.imagen = Math.floor(Math.random() * (0 - 7 + 1) + 7);

        return this.imagen;
    }
}