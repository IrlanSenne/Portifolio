import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../user.model';
import { UsersService } from './../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  formulario: FormGroup

  request: RequestCreate = {
    name: '',
    job: ''
  }
 
  response: ResponseCreate 

    create(){
      this.userService.createUsers(this.request).subscribe(res => {
        this.response = res
      })
    }
  constructor(
    private userService : UsersService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome:[null, Validators.required],
      profissao:[null, Validators.required]
      
    })
  }

}
