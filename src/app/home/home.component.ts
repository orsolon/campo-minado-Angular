import { Component, OnInit } from '@angular/core';

import { Item } from '../models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alunos: string 

  public pontos: number = 0
  
  public linhas: Item[] [] = [
    [
      {
        ponto: 1,
        tipo: "bomba"
      },
      {
        ponto: 2,
        tipo: "bandeira"
      },
      {
        ponto: 3,
        tipo: "bandeira"
      },
      {
        ponto: 4,
        tipo: "bomba"
      },
      {
        ponto: 5,
        tipo: "bandeira"
      },
      {
        ponto: 1,
        tipo: "bandeira"
      },
      {
        ponto: 2,
        tipo: "bandeira"
      },
      {
        ponto: 3,
        tipo: "bandeira"
      },
      {
        ponto: 4,
        tipo: "bomba"
      },
      {
        ponto: 5,
        tipo: "bandeira"
      },
      {
        ponto: 1,
        tipo: "bandeira"
      },
      {
        ponto: 2,
        tipo: "bandeira"
      },
      {
        ponto: 3,
        tipo: "bandeira"
      },
      {
        ponto: 4,
        tipo: "bandeira"
      },
      {
        ponto: 5,
        tipo: "bomba"
      }
    ]
  ]
  constructor() { }

  ngOnInit(): void {
    this.alunos = " Alunos da Live Itau Cubo"
  }

  bombaOuBandeira(item:Item){
    if(item.tipo == "bomba"){
      this.pontos = 0;
      alert("BOMBA!!! Game over...")
      return
    }
    this.pontos += 1;
  }
}
