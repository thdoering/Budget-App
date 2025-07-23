// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'src/main/preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  // Load the BUILT React app (not the source HTML)
  win.loadFile('dist/index.html');

  // Uncomment for devtools
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});