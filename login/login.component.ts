import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup
 
  onSubmit(){

    console.log(this.formulario.valid)

    if(this.formulario.valid){
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map(dados =>  dados))
    .subscribe(dados => {
      console.log(dados)
      //reset
      this.reseta()
    })
  }else{
    Object.keys(this.formulario.controls).forEach(campo => {
      const controle = this.formulario.get(campo)
      controle.markAsTouched()
      
    })
  }
    }

    
  reseta(){
    this.formulario.reset()
  }
 



   
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) { }

    populaDadosForm(dados1){
      this.formulario.patchValue({
        rua: dados1.logradouro,
        complemento: dados1.complemento,
        cidade: dados1.localidade,
        distrito: dados1.uf

      })
    }

    resetaDadosForm(){
      this.formulario.patchValue({
        rua: null,
        complemento: null,
        cidade: null,
        distrito: null

      })
    }
    consultaCEP(){
      let cep = this.formulario.get('cep').value
      if (cep !='') {
        var validaCep = /^[0-9]{8}$/;
          if (validaCep.test(cep)){

            this.resetaDadosForm()

            this.http.get(`//viacep.com.br/ws/${cep}/json`)
            .pipe(map(dados =>  dados))
            .subscribe(dados => this.populaDadosForm(dados))
          }
      }
    }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email:[null,[Validators.required, Validators.email]],
      rua: [null, Validators.required],
      cep:[null,[Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      numero:[null, Validators.required],
      complemento: [null],
      cidade: [null, Validators.required],
      distrito: [null, Validators.required]
    })
  }

}
