// import * as UiActions from './ui.actions';
// import * as PostsActions from '../../../reddit/store/posts/posts.actions'
// export interface Location {
//   params: {
//     [id: string]: string
//   }
// }

// export interface State {
//   appJustOpened: boolean;
//   loading: boolean;
// }

// const initialState = {
//   currentLocation: {
//     route: 'home',
//     params: {}
//   },
//   appJustOpened: true,
//   loading: false
// }

// export function UiReducer(state = initialState, action: UiActions.UiActions | PostsActions.PostActions) {
//   switch (action.type) {
//     case (UiActions.APP_JUST_OPENED):
//       return {
//         ...state,
//         appJustOpened: false
//       };
//     case(PostsActions.FETCH_FRONT_PAGE):
//     case(PostsActions.FETCH_SUBREDDIT):
//     case(PostsActions.FETCH_POST):
//       return {
//         ...state,
//         loading: true
//       };
//     case(PostsActions.SET_POST):
//     case(PostsActions.SET_POSTS):
//       return {
//         ...state,
//         loading: false
//       }
//     default:
//       return state;
//   }
// }
