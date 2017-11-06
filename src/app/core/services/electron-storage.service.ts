import { Injectable } from '@angular/core';
import * as ElectronJsonStorage from 'electron-json-storage';
import {Observable} from 'rxjs/Rx';
import { RedditUser, Subreddit } from 'snoowrap';

export const CURRENT_USER_STORAGE = 'CURRENT_USER_STORAGE';
export const REFRESH_TOKEN_STORAGE = 'REFRESH_TOKEN_STORAGE';
export const SUBSCRIPTIONS_STORAGE = 'SUBSCRIPTIONS_STORAGE';



export interface CurrentUserStorageResults {
  status: string,
  data: RedditUser
}

export interface SubscriptionsStorageResults {
  status: string,
  data: Subreddit[]
}

export interface AllUserStorageResults {
  status: string,
  data: {
    CURRENT_USER_STORAGE: RedditUser,
    REFRESH_TOKEN_STORAGE: Subreddit[],
    SUBSCRIPTIONS_STORAGE: string
  }
}

@Injectable()
export class ElectronStorageService {

  set(key: string, value: object) {
    ElectronJsonStorage.set(key, value, function(error) {
      if (error) { throw error; }
    });
  }

  remove(key: string) {
    ElectronJsonStorage.remove(key, (error) => {
      if (error) { throw error };
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

  getMany(keys: string[]): Observable<AllUserStorageResults> {
    return Observable.create( (observer) => {
      ElectronJsonStorage.getMany(keys, (err, data) => {
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
