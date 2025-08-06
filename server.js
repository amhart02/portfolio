//imports
import express from "express";
import indexRoutes from './src/routes/index.js'
import websiteRoutes from './src/routes/websites.js';
import graphicDesignRoutes from './src/routes/graphicDesign.js';
import programmingRoutes from './src/routes/programming.js';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from 'url';

//variables
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const mode = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;
dotenv.config()

//global middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));


//routes
app.use('/', indexRoutes);
app.use('/websites', websiteRoutes);
app.use('/graphicDesign', graphicDesignRoutes);
app.use('/programming', programmingRoutes);

// When in development mode, start a WebSocket server for live reloading
if (mode === ('development')) {
    const ws = await import('ws');

    try {
        const wsPort = parseInt(port) + 1;
        const wsServer = new ws.WebSocketServer({ port: wsPort });

        wsServer.on('listening', () => {
            console.log(`WebSocket server is running on port ${wsPort}`);
        });

        wsServer.on('error', (error) => {
            console.error('WebSocket server error:', error);
        });
    } catch (error) {
        console.error('Failed to start WebSocket server:', error);
    }
}

// Start the Express server
app.listen(port, async () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});