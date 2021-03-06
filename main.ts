import { app, BrowserWindow, Menu, screen } from 'electron';
import * as path from 'path';
import { environment } from './src/environments/index';


// import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer';
let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

if (serve) {
  require('electron-reload')(__dirname, {
  });
}

function createWindow() {

  const electronScreen = screen;
  const sss = electronScreen.getPrimaryDisplay();

  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // const windowSize = {100
  //   x: 0,
  //   y: 0,
  //   width: size.width,
  //   height: size.height
  // }
  // console.dir(windowSize);
// console.dir(BrowserWindow.getDevToolsExtensions());
// installExtension(REDUX_DEVTOOLS)
// .then((name) => console.log(`Added Extension:  ${name}`))
// .catch((err) => console.log('An error occurred: ', err));

// const auguryId = 'elgalmkoelokbchhkhacckoklkejnhcd';

// installExtension('auguryId')
// .then((name) => console.log(`Added Extension:  ${name}`))
// .catch((err) => console.log('An error occurred: ', err));
// BrowserWindow.addDevToolsExtension('/Users/andrew/Library/Application Support/Google/Chrome/Default/Extensions/elgalmkoelokbchhkhacckoklkejnhcd/1.14.0_0');
  if (!environment.production) {
    BrowserWindow.addDevToolsExtension('/Users/andrew/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0');

  }

  // Create the browser window.
  win = new BrowserWindow({
    width: 1200,
    height: 825,
    center: true,
    backgroundColor: '#004448',
    show: false,
    fullscreenable: false,
    vibrancy: 'dark',
  });

  // and load the index.html of the app.
  win.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  if (serve) {
    win.webContents.openDevTools();
  }

  if (!environment.production) {
    win.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;

      Menu
        .buildFromTemplate([{
          label: 'Inspect element',
          click: () => {
            win.inspectElement(x, y);
          }
        }])
        .popup(win)
      });
  }
  win.webContents.on('did-finish-load', () => {

    win.show();
    if (environment.production) {
      win.focus();
    }
  })
  // win.on('ready-to-show', () => {
  // })
  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
