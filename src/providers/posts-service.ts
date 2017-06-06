import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthService } from './auth-service'

/*
  Generated class for the PostsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostsService {

  constructor(public http: Http, private auth: AuthService) {
    console.log('Hello PostsService Provider');

  }

  public getPosts() {    
    let header = new Headers({
      'Authorization': `Bearer ${this.auth.token}`
    });
    let options = new RequestOptions({
      'headers': header
    });
    return this.http.get('/api/posts', options)
      .map(res => res.json());
  }

}
