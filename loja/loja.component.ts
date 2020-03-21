import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  constructor() { }
  produtos: any[] =[]
 mostraLoja: boolean =true
mostraCarrinho:boolean = false

nItens:number = 0
aparece:boolean= true
precoTotal: number =0.00

onMouseOut(){
  var cor = document.getElementById('aMenu')
  cor.style.color="white"
  cor.style.backgroundColor="rgb(155, 57, 40)"
}

onMouseOut1(){
  var cor = document.getElementById('aMenu1')
  cor.style.color="white"
  cor.style.backgroundColor="rgb(155, 57, 40)"
}

informacoes(){
  alert('teste')
}

remover(item,preco){
  var indice = this.produtos.indexOf(item)
      this.produtos.splice(indice , 1)
  this.nItens --
  this.precoTotal -= preco
}

mostrarLoja(){
this.mostraLoja = true
this.mostraCarrinho = false
}
mostrarCarrinho(){
  this.mostraLoja = false
  this.mostraCarrinho = true
  }


adicionarProduto1(){
  this.produtos.push({
   'img': 'violao.png',
    'nome': 'Violao',
    'valor': 97.00
  })
  this.nItens ++
  this.precoTotal += 97.00
}


adicionarProduto2(){
  this.produtos.push({
    'img': 'bateria.png',
    'nome': 'Bateria',
    'valor': 189.00
  })
  this.nItens ++
  this.precoTotal += 189.00
}

adicionarProduto3(){
  this.produtos.push({
    'img': 'guitarra.png',
    'nome': 'Guitarra',
    'valor': 251.00
  })
  this.nItens ++
  this.precoTotal += 251.00
}

adicionarProduto4(){
  this.produtos.push({
    'img': 'microfone.png',
    'nome': 'Microfone',
    'valor': 56.00
  })
  this.nItens ++
  this.precoTotal += 56.00
}

adicionarProduto5(){
  this.produtos.push({
    'img': 'teclado.png',
    'nome': 'Teclado',
    'valor': 145.00
  })
  this.nItens ++
  this.precoTotal += 145.00
}

  ngOnInit() {
  }

}
