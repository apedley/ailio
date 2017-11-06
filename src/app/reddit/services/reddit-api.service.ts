// import { ReplaySubject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import * as fromAuth from '../../store/auth/auth.reducer'
import * as AuthActions from '../../store/auth/auth.actions';

import { ElectronStorageService, CURRENT_USER_STORAGE, REFRESH_TOKEN_STORAGE, SUBSCRIPTIONS_STORAGE } from './../../core/services/electron-storage.service';
import * as Snoowrap from 'snoowrap';
import { environment } from '../../../environments/index';
import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';

const DEFAULT_SCOPE = [
  'identity',
  'edit',
  'flair',
  'history',
  'modconfig',
  'modflair',
  'modlog',
  'modposts',
  'modwiki',
  'mysubreddits',
  'privatemessages',
  'read',
  'report',
  'save',
  'submit',
  'subscribe',
  'vote',
  'wikiedit',
  'wikiread',
]

@Injectable()
export class RedditApiService {
  public snoo: Snoowrap;

  constructor(
    private authStore: Store<fromAuth.State>,
    private storage: ElectronStorageService
  ) {
    const snooConfig = {
      clientId: environment.redditSecret.clientId,
      userAgent: environment.userAgent,
      accessToken: environment.redditToken.access_token,
      refreshToken: environment.redditToken.refresh_token
    }

    this.snoo = new Snoowrap(snooConfig);


    this.snoo.config({proxies: false});


  }

  getAuthUrl() {
    return Snoowrap.getAuthUrl({
    scope: DEFAULT_SCOPE,
    redirectUri: 'http://oauthcallback',
    clientId: environment.redditSecret.clientId
    })
  }

  logInFromCode(code: string) {
    Snoowrap.fromAuthCode({
      clientId: environment.redditSecret.clientId,
      redirectUri: 'http://oauthcallback',
      code,
      userAgent: environment.userAgent
    }).then((s: Snoowrap) => {
      this.snoo = s;
      this.storage.set(REFRESH_TOKEN_STORAGE, {
        token: s.refreshToken
      });

      this.authStore.dispatch(new AuthActions.LoggedIn(s.refreshToken));

      this.snoo.getMe().then( ( me ) => {
        this.storage.set(CURRENT_USER_STORAGE, me);

        this.authStore.dispatch(new AuthActions.SetUserInfo(me))

        this.snoo.getSubscriptions().then( ( subs ) => {
          this.storage.set(SUBSCRIPTIONS_STORAGE, subs);

          this.authStore.dispatch(new AuthActions.SetSubscriptions(subs));
        })
      })


    })
  }

  getFrontPage() {
    return fromPromise(this.snoo.getHot());
  }

  getPost(postId: string) {
    return fromPromise(this.snoo.getSubmission(postId).fetch());
  }


  getLoggedInUser() {
    return fromPromise(this.snoo.getMe());
  }

  getSubscriptions() {
    return fromPromise(this.snoo.getSubscriptions());
  }

  fetchCommentsForPost(postId: string) {
    return fromPromise(this.snoo.getSubmission(postId).fetch());
  }

  getSubreddit(subreddit: string) {
    return fromPromise(this.snoo.getHot(subreddit));
  }
}
