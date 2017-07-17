const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor() {
    super({
      height: 500,
      width: 300,
      frame: false,
      resizable: false,
      show: false,
      webPreferences: { backgroundThrottling: false }
    });

    this.on('blur', this.blurHanddle.bind(this));
  }

  blurHanddle() {
    this.hide();
  }

}

module.exports = MainWindow;
