import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  habilita: boolean = true



  desabilitar(){
    this.habilita = !this.habilita
  }
  constructor() { }
  instrumentos: any[] =[]

  ngOnInit() {
  }

}
