#!/usr/bin/node
const electron = require("electron");
const { app, BrowserWindow } = require("electron");

function createWindow() {
	// create the window
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});
	
	// load the *.html file
	win.loadFile('index.html');
}

app.on('ready', createWindow);
