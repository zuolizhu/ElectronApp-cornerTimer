const path = require('path');
const electron = require('electron');

const MainWindow = require('./app/mainWindow');
const TimerTray = require('./app/timerTray');


const { app, BrowserWindow, Tray }  = electron;

let mainWindow;
let cornerTray;

app.on('ready', () => {
  mainWindow = new MainWindow();
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';

  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  cornerTray = new TimerTray(iconPath, mainWindow);

})
