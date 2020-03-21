import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-matematica',
  templateUrl: './matematica.component.html',
  styleUrls: ['./matematica.component.css']
})
export class MatematicaComponent implements OnInit {


  // ===================== JOGO =========================================== //
acertos: number = 0
erros: number = 0

res:number

mudaCor: boolean = true
corResposta: string

resposta_final: string = ''
resultado: number

avaliarResposta(valor){
  if(valor){
    this.mudaCor = !this.mudaCor
    this.corResposta= 'resposta1'
    this.resposta_final = ' Acertou ! '
    this.acertos++
    
  }else{
    this.mudaCor = !this.mudaCor
    this.res = valor
    this.corResposta= 'resposta2'
    this.resposta_final = ' Errou ! '
    this.erros++
  }
}



  
  constructor() { 

  }

  ngOnInit() {
    
  }

}
