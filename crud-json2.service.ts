import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Crud } from './crud-json2/crud-json2-2';
import { environment } from './../environments/environment';
import { delay, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudJson2Service {

private readonly API =`${environment.API}musicas`

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Crud[]>(this.API).pipe(
      delay(2000),tap(console.log)
    )
  }

  loadById(id){
    return this.http.get(`${this.API}/${id}`).pipe(take(1))
  }

  create(musica){
    return this.http.post(this.API, musica).pipe(take(1))
  }

  update(musica){
    return this.http.put(`${this.API}/${musica.id}`, musica).pipe(take(1))
  }


  save(musica){
    if(musica.id){
      return this.update(musica)
    }
    return this.create(musica)
  }

  removeMusica(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
  }



}
