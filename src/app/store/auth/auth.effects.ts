import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import * as fromAuth from './auth.reducer';

import { ElectronStorageService, CURRENT_USER_STORAGE, SUBSCRIPTIONS_STORAGE, REFRESH_TOKEN_STORAGE } from '../../core/services/electron-storage.service';
import { RedditApiService } from '../../reddit/services/reddit-api.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

const USER_STORAGE = [CURRENT_USER_STORAGE, SUBSCRIPTIONS_STORAGE, REFRESH_TOKEN_STORAGE ]
@Injectable()
export class AuthEffects {

  @Effect()
  loadUserFromSotage = this.actions$.ofType(AuthActions.LOAD_USER_FROM_STORAGE)
  .switchMap((action: AuthActions.LoadUserFromStorage) => {
    return this.electronStorage.getMany( [CURRENT_USER_STORAGE, SUBSCRIPTIONS_STORAGE, REFRESH_TOKEN_STORAGE ])
  }).map((results) => {

    if (results.status !== 'ok') {
      return {
        type: AuthActions.LOG_OUT
      }
    }


    const anyEmpty = USER_STORAGE.reduce( (prev, curr) => {
      return Object.keys(results.data[curr]).length === 0;
    }, false);

    if (anyEmpty) {
      return {
        type: AuthActions.LOG_OUT
      }
    }

    return {
      type: AuthActions.SET_USER_FROM_STORAGE,
      subreddits: results.data.SUBSCRIPTIONS_STORAGE,
      user: results.data.CURRENT_USER_STORAGE,
      refreshToken: results.data.REFRESH_TOKEN_STORAGE
    }
  })

  @Effect({ dispatch: false })
  deleteUserFromStorage = this.actions$.ofType(AuthActions.LOG_OUT)
  .map((action: AuthActions.LogOut) => {
    this.electronStorage.remove(CURRENT_USER_STORAGE);
    this.electronStorage.remove(SUBSCRIPTIONS_STORAGE);
    this.electronStorage.remove(REFRESH_TOKEN_STORAGE);
  });

  constructor(private actions$: Actions,
    private redditApi: RedditApiService,
    private electronStorage: ElectronStorageService
  ) {}
}


//   @Effect()
//   storeUserInfo = this.actions$.ofType(AuthActions.STORE_USER_INFO).pipe(
//     map((action: AuthActions.StoreUserInfo) => {

//       this.storage.set('currentUser', action.user);

//       return {
//         type: AuthActions.FETCH_SUBSCRIPTIONS
//       }
//     }),
//   )

//   @Effect()
//   fetchSubcriptions = this.actions$.ofType(AuthActions.FETCH_SUBSCRIPTIONS).pipe(
//     switchMap((action: AuthActions.FetchSubscriptions) => {
//       return this.reddit.getSubscriptions();
//     }),
//     map((subscriptions) => {
//       return {
//         type: AuthActions.STORE_SUBSCRIPTIONS,
//         subreddits: subscriptions
//       }
//     })

//   )

//   @Effect()
//   storeSubscriptions = this.actions$.ofType(AuthActions.STORE_SUBSCRIPTIONS).pipe(
//     map((action: AuthActions.StoreSubscriptions) => {

//       this.storage.set('subscriptions', action.subreddits);

//       return {
//         type: UiActions.LOAD_HOME_PAGE
//       }
//     }),
//   )

//   constructor(private actions$: Actions, private store: Store<fromAuth.State>, private electron: ElectronService,
//     private reddit: RedditService, private storage: StorageService) { }
// }
