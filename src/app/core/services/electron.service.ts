import { RedditApiService } from './../../reddit/services/reddit-api.service';

import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, remote } from 'electron';
import * as childProcess from 'child_process';


@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  childProcess: typeof childProcess;

  constructor(private reddit: RedditApiService) {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.childProcess = window.require('child_process');
    }
  }

  isElectron = () => {
    return window && window.process && window.process.type;
  }

  openAuthWindow() {
    const authUrl = this.reddit.getAuthUrl();

    const authWindow = new remote.BrowserWindow({
      width: 800,
      height: 600,
      show: false
    });

    authWindow.loadURL(authUrl);
    authWindow.show();
    authWindow.webContents.on('will-navigate', (event, newUrl) => {

      if (newUrl.startsWith('http://oauthcallback')) {
        this.reddit.logInFromCode(newUrl.split('code=')[1]);
        authWindow.close();
        console.log('auth');
        console.dir(event);
      } else {
        console.log('auth fail');
        console.dir(event);
        console.dir(newUrl);
      }
    });
  }

}
