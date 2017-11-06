import * as AuthActions from './auth.actions';
import { RedditUser, Subreddit } from 'snoowrap';

export interface State {
  user: RedditUser,
  loggedIn: boolean,
  subscriptions: Subreddit[]
}

const initialState = {
  user: null,
  subscriptions: [],
  loggedIn: false
}


export function AuthReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.LOGGED_IN):
      return {
        ...state,
        loggedIn: true
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
        ...state,
        user: null
      }
    default:
      return state;
  }
}

export const getCurrentUser = (state: State) => state.user;
export const getSubscriptions = (state: State) => state.subscriptions;
