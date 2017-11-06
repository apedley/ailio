import { Params, RouterStateSnapshot } from '@angular/router';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromUi from './ui/ui.reducer';
import * as fromAuth from './auth/auth.reducer';
import * as fromRouter from '@ngrx/router-store';


export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export class CustomRouterStateSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    return { url, queryParams };
  }
}

export interface State {
  ui: fromUi.State,
  auth: fromAuth.State,
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.UiReducer,
  auth: fromAuth.AuthReducer,
  routerReducer: fromRouter.routerReducer
}

export const getUiState = createFeatureSelector<fromUi.State>('ui');

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');


export const getCurrentUser = createSelector(getAuthState, fromAuth.getCurrentUser);
export const getSubscriptions = createSelector(getAuthState, fromAuth.getSubscriptions);

export const getSidebar = createSelector(getUiState, fromUi.getSidebar);
