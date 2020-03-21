import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja-virtual',
  templateUrl: './loja-virtual.component.html',
  styleUrls: ['./loja-virtual.component.css']
})
export class LojaVirtualComponent implements OnInit {
  habilita: boolean = true

  desabilitar(){
    this.habilita = !this.habilita
  }
  constructor() { }
  ativo: boolean = false

 
  ngOnInit() {
  }

}
