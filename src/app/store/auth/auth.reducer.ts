import * as AuthActions from './auth.actions';
import { RedditUser, Subreddit } from 'snoowrap';

export interface State {
  user: RedditUser,
  loggedIn: boolean,
  subscriptions: Subreddit[],
  refreshToken: string
}

const initialState = {
  user: null,
  subscriptions: [],
  loggedIn: false,
  refreshToken: ''
}


export function AuthReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.LOGGED_IN):
      return {
        ...state,
        loggedIn: true,
        refreshToken: action.refreshToken
      };
    case (AuthActions.STORE_USER_INFO):
    case (AuthActions.SET_USER_INFO):
      return {
        ...state,
        user: action.user
      };
    case (AuthActions.STORE_SUBSCRIPTIONS):
    case (AuthActions.SET_SUBSCRIPTIONS):
      return {
        ...state,
        subscriptions: action.subreddits
      }
    case (AuthActions.LOG_OUT):
      return {
        ...initialState
      }
    case (AuthActions.SET_USER_FROM_STORAGE):
      return {
        user: action.user,
        subscriptions: action.subreddits,
        refreshToken: action.refreshToken,
        loggedIn: true
      }
    default:
      return state;
  }
}

export const getCurrentUser = (state: State) => state.user;
export const getSubscriptions = (state: State) => state.subscriptions;
