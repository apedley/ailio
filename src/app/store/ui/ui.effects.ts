// import { Store } from '@ngrx/store';
// import { Injectable } from '@angular/core'
// import { Effect, Actions } from '@ngrx/effects';
// import * as fromUi from './ui.reducer';
// import * as UiActions from './ui.actions';


// import { Observable } from 'rxjs/Rx';
// import { map, tap, switchMap } from 'rxjs/operators';

// @Injectable()
// export class UiEffects {

//   @Effect({ dispatch: false })
//   appLaunched = this.actions$.ofType(UiActions.APP_JUST_OPENED).pipe(
//     tap(action => {
//       console.log('app opened')
//     })
//   );


//   @Effect({ dispatch: false })
//   loadHomePage = this.actions$.ofType(UiActions.LOAD_HOME_PAGE).pipe(
//     tap(action => {
//       console.log('ok home page');
//     })
//   )

//   constructor(private actions$: Actions, private store: Store<fromUi.State>) { }
// }
