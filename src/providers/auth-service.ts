import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  public token: string;

  constructor(private http: Http, private storage: Storage) {
    storage.get('token').then(token => {
      this.token = token;
    });
  }

  public login(credentials){
    return this.http.post('/api/signin', credentials).map(res => res.json());
  }

  public register(credentials){
    return this.http.post('/api/signup', credentials).map(res => res.json());
  }

  public logout(){
    this.storage.clear();
  }

}
