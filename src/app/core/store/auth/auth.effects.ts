import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import * as fromAuth from './auth.reducer';

import { ElectronStorageService } from '../../services/electron-storage.service';
import { RedditApiService } from '../../../reddit/services/reddit-api.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

@Injectable()
export class AuthEffects {

  @Effect()
  fetchUserInfo = this.actions$.ofType(AuthActions.LOGGED_IN)
  .switchMap((action: AuthActions.LoggedIn) => {
    return this.redditApi.getLoggedInUser();
  })
  .map((me) => {
    return {
      type: AuthActions.STORE_USER_INFO,
      user: me
    }
  });

  @Effect()
  storeUserInfo = this.actions$.ofType(AuthActions.STORE_USER_INFO)
  .map((action: AuthActions.StoreUserInfo) => {
    this.electronStorage.set('currentUser', action.user);

    return {
      type: AuthActions.FETCH_SUBSCRIPTIONS
    }
  })

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
