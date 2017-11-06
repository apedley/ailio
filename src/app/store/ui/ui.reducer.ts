import * as UiActions from './ui.actions';

export interface State {
  sidebarVisible: boolean,
  sidebarContent: string
}

const initialState = {
  sidebarVisible: true,
  sidebarContent: 'subscriptions'
}

export function UiReducer(state = initialState, action: UiActions.UiActions) {
  switch (action.type) {
    case (UiActions.TOGGLE_SIDEBAR):
      return {
        ...state,
        sidebarVisible: !state.sidebarVisible
      }
    default:
      return state;
  }
}

export const getSidebar = (state: State) => {
  return {
    sidebarVisible: state.sidebarVisible,
    sidebarContent: state.sidebarContent
  }
}
