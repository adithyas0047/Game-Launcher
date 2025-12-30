const { app, BrowserWindow, ipcMain } = require("electron");
const { exec } = require("child_process");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },

    zoomFactor: 1.0,
    zoomToPageWidth: false,
  });

  win.loadFile("index.html");

  if (!process.env.ELECTRON_START_URL) {
    win.webContents.closeDevTools();
  }

  win.webContents.on("did-finish-load", () => {
    win.webContents.setZoomFactor(1.0);
  });
}

ipcMain.handle("launch-game", (_, gamePath) => {
  exec(`"${gamePath}"`, (error) => {
    if (error) {
      console.error("Launch failed:", error);
    }
  });
});

app.whenReady().then(createWindow);
