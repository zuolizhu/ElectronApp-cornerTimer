const path = require('path');
const electron = require('electron');
const TimerTray = require('./app/timerTray');

const { app, BrowserWindow, Tray }  = electron;

let mainWindow;
let cornerTray;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    frame: false,
    resizable: false,
    show: false
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';

  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  cornerTray = new TimerTray(iconPath, mainWindow);

})
