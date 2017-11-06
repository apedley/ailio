import { Injectable } from '@angular/core';
import * as ElectronJsonStorage from 'electron-json-storage';
import {Observable} from 'rxjs/Rx';
import { RedditUser, Subreddit } from 'snoowrap';


export interface UserStorageResults {
  status: string,
  data: RedditUser
}
export interface SubscriptionsStorageResults {
  status: string,
  data: Subreddit[]
}

@Injectable()
export class ElectronStorageService {

  set(key: string, value: object) {
    ElectronJsonStorage.set(key, value, function(error) {
      if (error) { throw error; }
    });
  }

  get(key: string): Observable<Object> {
    return Observable.create( (observer) => {
      ElectronJsonStorage.get(key, (err, data) => {
        if (err) {
          observer.next({
            status: 'error',
            data: { message: err }
          })
        } else if ( Object.keys(data).length === 0 ) {
          observer.next({
            status: 'empty',
            data: { }
          })
        } else {
          observer.next({
            status: 'ok',
            data: data
          });
        }
      })
    }).publish().refCount();
  }
}
