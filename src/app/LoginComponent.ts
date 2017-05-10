import {AuthService} from "./AuthService"

import {Component} from "@angular/core"

import {Router} from '@angular/router';

import {Http,  
  Response,
  RequestOptions,
  Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


@Component({

   selector:'login',

   templateUrl: './login.html',

   styleUrls: ['app.component.css']
})

export class LoginComponent {

  url: string;

  headers: Headers;

  options: RequestOptions;

  data:Object;

  response: Response;

  message: string;


   constructor(private http: Http,

   public authService: AuthService
   ) 
   
   {

        this.message = '';

        this.url = 'https://test.alyt.com:8443//ServerLYT/LYT_Server/WS_API/WS_login.php';

        this.headers = new Headers();

        this.headers.append('Content-Type','application/x-www-form-urlencoded');

        this.options = new RequestOptions({headers: this.headers});

        let _build = (<any> http)._backend._browserXHR.build;

        (<any> http)._backend._browserXHR.build = () => {

          let _xhr =  _build();

          _xhr.withCredentials = true;

          return _xhr;
  };
  
  }

mes: string

login(username: string, password: string)

  {

      let params = 'username=' + username + '&password='+ password ; 

      this.http.post('https://test.alyt.com:8443//ServerLYT/LYT_Server/WS_API/WS_login.php', params, { headers: this.headers })

      .subscribe( 

          data => console.log('Received:' + data, localStorage.setItem('username', username)),

          (err) => console.log(this.mes = 'errore1'),

 );

                }
  logout() 
      {
        localStorage.removeItem('username');
        return false
    }


}
