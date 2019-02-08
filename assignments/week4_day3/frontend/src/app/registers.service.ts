import { Injectable } from '@angular/core';
import {HttpClientModule, HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RegistersService {

  constructor(private http:HttpClient) { }

  //retrieving RegistrationService

  getRegisters(): Observable<Register[]> {
    return this.http.get<Register[]>('http:localhost:3000/api/register');
  }

  addUser(newUser){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/register', newUser,{headers:headers});

  }
}
