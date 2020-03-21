import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseUsers, ResponseCreate, RequestCreate, ResponseUser, RequestUpdate, ResponseUpdate } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private url = "https://reqres.in/api/users"

getUsers(): Observable<ResponseUsers> {
return this.http.get<ResponseUsers>(this.url)
}

createUsers(request: RequestCreate): Observable<ResponseCreate> {
  return this.http.post<ResponseCreate>(this.url,request)
}

getUser(id: string): Observable<ResponseUser> {
  const _url = `${this.url}/${id}`
  return this.http.get<ResponseUser>(_url)
  }

  updateUser(id:string, request:RequestUpdate): Observable<ResponseUpdate>{
    const _url = `${this.url}/${id}`
    return this.http.put<ResponseUpdate>(_url,request)
  }

  deleteUser(id:string): Observable<any>{
    const _url = `${this.url}/${id}`
    return this.http.delete<any>(_url)
  }

}
