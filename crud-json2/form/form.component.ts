import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CrudJson2Service } from './../../crud-json2.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup

  submitted: boolean = false 

  /* =========Modal ============= */
modalRef: BsModalRef;
type:string = 'success'
@ViewChild('myModal', { static: true }) myModal: TemplateRef<any>

openModal(template: TemplateRef<any>, dismissTimeOut: number) {
  this.modalRef = this.modalService.show(template)

  if(dismissTimeOut){
    setTimeout(()=> {
      this.modalRef.hide()   
  } ,dismissTimeOut)
  }
}

tituloMusica: string

message: string = ' criada com sucesso'



/* =================== */

  hasError(field: string) {
    return this.form.get(field).errors
  }

 
 constructor(private fb: FormBuilder,
   private service: CrudJson2Service,
    private location: Location,
    private route: ActivatedRoute,
    private modalService: BsModalService
 
) { }

  ngOnInit() {

    // this.route.params.subscribe(
    //   (params:any) => {
    //     const id = params['id']

    //     const musica$  = this.service.loadById(id)
    //     musica$.subscribe( musica => {
    //       this.updateForm(musica)
    //     })

    //   } 
    // )

    this.route.params.pipe(
      map( (params:any) => params['id']),
      switchMap(id =>  this.service.loadById(id))
    )
    .subscribe(
      musica =>  this.updateForm(musica))

      
    

    this.form = this.fb.group({
      id: [null],
      titulo:[null,[Validators.required, Validators.minLength(3), Validators.maxLength(30)]]   
     })
  }

  updateForm(musica){
    this.form.patchValue({
      titulo: musica.titulo,
      id: musica.id
    })
  

  }

  onSubmit(){
    this.submitted = true
    console.log(this.form.value)
   if( this.form.valid){
     console.log('submit')

     this.service.save(this.form.value).subscribe(
       success => {
        
        this.openModal(this.myModal, 3000) 
        this.location.back()}
     )


    //  if(this.form.value.id){
    //     // update
    //     this.service.update(this.form.value).subscribe(
    //    success => {
    //      this.location.back()
    //    }
    //     )
    //  }else {
    //   this.service.create(this.form.value).subscribe(
    //     success => {this.location.back()},
    //     error => console.error(error)
    //   )
  

    //  }

   
   }
  }

onCancel(){
  this.submitted = false
  this.form.reset()
  this.location.back()
    
}

}
