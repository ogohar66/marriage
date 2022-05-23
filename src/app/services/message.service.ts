import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
              private http:HttpClient
  ) { }

  getMessages(id:number)
  {
    return this.http.get(`${environment.backEndApi}/getmessages/${id}`)
  }
}
