import { Component, OnInit } from '@angular/core';
import { RequestUpdate } from './../user.model';
import { UsersService } from './../user.service';
import {  FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {



  constructor(private userService : UsersService,
     private route: ActivatedRoute,
  ) { }
mostra: boolean = false
update(){
  this.mostra= !this.mostra
  this.userService.updateUser(this.id, this.request).subscribe(res => {
    alert(`Atualidado: ${res.updatedAt}\n
     Nome: ${res.name} \n
      Profissão: ${res.job}`)
  })
  this.request = {
    name: ``,
    job: ''
  }
}

  id:string 

  request: RequestUpdate

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id')
     this.userService.getUser(this.id).subscribe(res => {
        this.request = {
          name: `${res.data.first_name} ${res.data.last_name}`,
          job: ''
        }
     }) 

    

    
  }

 

}
