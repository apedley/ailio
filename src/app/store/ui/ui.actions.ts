import { Action } from '@ngrx/store';


export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export class ToggleSidebar implements Action {
  readonly type = TOGGLE_SIDEBAR;
}

export type UiActions = ToggleSidebar | null;

// import { Location } from './ui.reducer';
// export const APP_JUST_OPENED = 'APP_JUST_OPENED';

// export const LOAD_HOME_PAGE = 'LOAD_HOME_PAGE';



// export class LoadHomePage implements Action {
//   readonly type = LOAD_HOME_PAGE;
// }


// export class AppJustOpened implements Action {
//   readonly type = APP_JUST_OPENED;
// }

// export type UiActions =  AppJustOpened | LoadHomePage;
