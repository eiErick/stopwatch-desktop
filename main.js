const { app, BrowserWindow } = require("electron");

const creatWin = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        minWidth: 380,
        minHeight: 300,
    });
    win.loadFile("index.html");
    win.setMenu(null);
}

app.whenReady().then(() => {
    creatWin();
});
