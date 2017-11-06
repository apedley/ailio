import { Component } from '@angular/core';
import { ElectronService } from './core/services/electron.service';
import { ElectronStorageService } from './core/services/electron-storage.service';
import * as fromAuth from './store/auth/auth.reducer';
import * as AuthActions from './store/auth/auth.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class AppComponent {
  constructor(public electronService: ElectronService, private authStore: Store<fromAuth.State>) {

    if (electronService.isElectron()) {
      console.log('Mode electron');
      // Check if electron is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.ipcRenderer);
      // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.childProcess);
    } else {
      console.log('Mode web');
    }

    this.authStore.dispatch(new AuthActions.LoadUserFromStorage());

  }
}
