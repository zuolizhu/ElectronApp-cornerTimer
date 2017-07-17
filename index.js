const path = require('path');
const electron = require('electron');

const MainWindow = require('./app/mainWindow');
const TimerTray = require('./app/timerTray');


const { app, ipcMain }  = electron;

let mainWindow;
let cornerTray;

app.on('ready', () => {
  mainWindow = new MainWindow();
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';

  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  cornerTray = new TimerTray(iconPath, mainWindow);
})


ipcMain.on('update-timer', (e, timeLeft) => {
  const iconName = process.platform == 'win32' ? 'windows-icon@2x.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, './src/assets/' + iconName);
  if(process.platform == 'darwin') {
    cornerTray.setTitle(timeLeft);
  } else {
    // cornerTray.displayBalloon({
    //   icon: iconPath,
    //   title: '',
    //   content: timeLeft
    // })
  }
});
