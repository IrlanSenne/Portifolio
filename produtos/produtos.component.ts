import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'produtoss',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  formulario:FormGroup

// ===================== JOGO =========================================== //
jogoMatematico: boolean = true
valor1: number = 0
valor2: number = 0

@Input()resultado: number
str_operacao: string 

desabilita : boolean = false

tipo_operacao : number = Math.floor(Math.random() * 4)

valor_inserido: any

@ViewChild('res', {static: true}) res: ElementRef<any> 

@Output() resposta = new EventEmitter()

avaliarResultadoInserido(){
  var e = document.getElementById('meuInput')
  if(this.valor_inserido == this.resultado){
    this.resposta.emit(true)
    this.res.nativeElement.style.color="green"
    this.res.nativeElement.style.fontSize="17px"
    this.res.nativeElement.innerText="Era " + this.resultado
    
  }else if(this.valor_inserido == ''){
    this.resposta.emit('')
    this.desabilita = false

  }else{
    this.resposta.emit(false)      
    this.res.nativeElement.style.color="red"
    this.res.nativeElement.style.fontSize="17px"
    this.res.nativeElement.innerText="Era " + this.resultado
  }
  e.focus()
 this.criarNovaOperacao()
 this.formulario.reset()

}

definirResultado(evento: any){
 this.valor_inserido = evento.target.value
}

criarNovaOperacao(){ 
  this.tipo_operacao= Math.floor(Math.random() * 4)
  this.valor1 = Math.floor(Math.random() * 10)
  this.valor2 = Math.floor(Math.random() * 10)

if(this.tipo_operacao == 0){
this.str_operacao = this.valor1 + ' + ' + this.valor2 + ' = '
this.resultado = this.valor1 + this.valor2


}else if(this.tipo_operacao == 1){
  this.str_operacao = this.valor1 + ' - ' + this.valor2 + ' = '
  this.resultado = this.valor1 - this.valor2


  }else if(this.tipo_operacao == 2){
    this.str_operacao = this.valor1 + ' x ' + this.valor2 + ' = '
    this.resultado = this.valor1 * this.valor2
   

    }else if(this.tipo_operacao == 3){
      this.str_operacao = this.valor1 + ' : ' + this.valor2 + ' = '
      this.resultado = this.valor1 / this.valor2     

      }
}


  constructor( private formBuilder: FormBuilder ) {  }

  ngOnInit() {
    this.res.nativeElement.innerText=""
    this.criarNovaOperacao()
    
    var e = document.getElementById('meuInput')
    e.focus()

    this.formulario = this.formBuilder.group({
      numero:[null, Validators.required]
      
    })
  }

}

