import { Component, OnInit } from '@angular/core';
import { User } from './../user.model';
import { UsersService } from './../user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private userService : UsersService,
    private route: ActivatedRoute,
    private _route: Router) { }
 id: string
 
 user: User   

 mostra: boolean = false

 remove(){
   this.userService.deleteUser(this.id).subscribe(res => {
     this.mostra= !this.mostra
  
   })
 }

 cancel(){
   this._route.navigate(['/users'])
 }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id')
    this.userService.getUser(this.id).subscribe(res => {
       this.user = res.data
    }) 

  }

}
