
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { CrudJson2Service } from '../crud-json2.service';
import { Crud } from './crud-json2-2';
import { Observable, empty, Subject } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';





@Component({
  selector: 'app-crud-json2',
  templateUrl: './crud-json2.component.html',
  styleUrls: ['./crud-json2.component.css']
})
export class CrudJson2Component implements OnInit {

  constructor(private service: CrudJson2Service,
    private router :Router,
    private route : ActivatedRoute,
    private modalService: BsModalService
  ){ }

  //musicas: Crud[]
  musicas$: Observable<Crud[]>
  error$ = new Subject<boolean>();

  mostraModal: boolean = true

  musicaSelecionada: Crud
  modalRef: BsModalRef;
  type:string = 'success'
@ViewChild('myModal', { static: true }) myModal: TemplateRef<any>
@ViewChild('myModal2', { static: true }) myModal2: TemplateRef<any>
tituloMusica: string




results$: Observable<any>


/*  ============= MODAL ================= */
  openModal(template: TemplateRef<any>, dismissTimeOut: number) {
    this.modalRef = this.modalService.show(template)

    if(dismissTimeOut){
      setTimeout(()=> {
        this.modalRef.hide()
      this.mostraModal = false
    } ,dismissTimeOut)
    }
  }


/*  =============== Cancelar Modal  no "x" ====================== */
closeModal(){
  this.modalRef.hide()
  this.mostraModal = false
}
/**============ LISTAR ===================== */
  onRefresh() {
    this.musicas$ = this.service.list().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
       this.error$.next(true);

       this.type= 'danger'
       this.openModal(this.myModal,3000)
 
      
        return empty();
      })
    );
  
  }
/**================================= */
  ngOnInit() {
   // this.service.list().subscribe(dados => this.musicas = dados)  

  // this.musicas$ = this.service.list()
  this.onRefresh()

}
/**================ Editar ======== */
onEdit(id){
  this.router.navigate(['crud/crud-json2/editar', id])

    }
/**=============== DELETAR ================== */
    onDelete(musica ) {
      this.musicaSelecionada = musica
      this.service.removeMusica(this.musicaSelecionada.id).subscribe(
     
        success => this.onRefresh()
        
      )
      this.type= 'danger'
      this.tituloMusica = this.musicaSelecionada.titulo
      this.openModal(this.myModal2,3000)

        }

/**================================= */



}