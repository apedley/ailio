import { Action } from '@ngrx/store';
// import * as Snoowrap from 'snoowrap';
import { Subreddit, RedditUser } from 'snoowrap';


export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
// export const SIGN_UP = 'SIGN_UP';

export const LOGGED_IN = 'LOGGED_IN';

export const SET_USER_INFO = 'SET_USER_INFO';
export const STORE_USER_INFO = 'STORE_USER_INFO';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';


export const STORE_SUBSCRIPTIONS = 'STORE_SUBSCRIPTIONS';
export const FETCH_SUBSCRIPTIONS = 'FETCH_SUBSCRIPTIONS';
export const SET_SUBSCRIPTIONS = 'SET_SUBSCRIPTIONS';

export class LogIn implements Action {
  readonly type = LOG_IN;
}

export class LogOut implements Action {
  readonly type = LOG_OUT;

}

// export class SignUp implements Action {
//   readonly type = SIGN_UP;
// }

export class LoggedIn implements Action {
  readonly type = LOGGED_IN;
}

export class FetchUserInfo implements Action {
  readonly type = FETCH_USER_INFO;
}

export class StoreUserInfo implements Action {
  readonly type = STORE_USER_INFO;

  constructor(public user: RedditUser) { }
}

export class SetUserInfo implements Action {
  readonly type = SET_USER_INFO;
  constructor(public user: RedditUser) {}
}

export class StoreSubscriptions implements Action {
  readonly type = STORE_SUBSCRIPTIONS;

  constructor(public subreddits: Subreddit[]) { }
}

export class FetchSubscriptions implements Action {
  readonly type = FETCH_SUBSCRIPTIONS;
}

export class SetSubscriptions implements Action {
  readonly type = SET_SUBSCRIPTIONS;
  constructor(public subreddits: Subreddit[]) {}
}

// export class ClearUserInfo implements Action {
//   readonly type = CLEAR_USER_INFO;
// }

export type AuthActions = LogIn | LogOut | LoggedIn
  | FetchUserInfo | StoreUserInfo | FetchSubscriptions | StoreSubscriptions
  | SetUserInfo | SetSubscriptions;


// export type AuthActions = LogIn | LogOut | SignUp | LoggedIn
//   | FetchUserInfo | StoreUserInfo | FetchSubscriptions | StoreSubscriptions | ClearUserInfo
//   | SetUserInfo | SetSubscriptions;
