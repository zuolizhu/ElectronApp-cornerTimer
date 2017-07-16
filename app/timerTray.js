const electron = require('electron');
const { Tray } = electron;

class TimerTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);
    this.mainWindow = mainWindow;

    this.setToolTip('Electron Timer App');

    this.on('click', this.handleClick.bind(this));
  }

  handleClick(e, bounds) {

    //Click event bounds
    const { x, y } = bounds;

    //window height and width
    const { height, width } = this.mainWindow.getBounds();

    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      const xPosition = process.platform === 'darwin' ? x - width / 2 : x - width / 3;
      const yPosition = process.platform === 'darwin' ? y : y - height;
      this.mainWindow.setBounds({
        x: xPosition,
        y: yPosition,
        height,
        width
      });
      this.mainWindow.show();
    }
  }
}


module.exports = TimerTray;
