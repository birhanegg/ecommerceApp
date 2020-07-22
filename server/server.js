/**
 * MWA Project  
 * Online-shopping application using MEAN stack
 * Since june 2020
 * Team-6 
 */

const http = require('http');
const app = require('./app');
const cron = require('./api/cron/cron.js');
const connectDB = require('./api/config/dbconnection');
const cronConfig = require('./api/config/cronConfig');

connectDB();

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
    console.log('The Server is Running in port 3000 .... ');
    if(cronConfig.enable) {
       // cron.run();
    }
});
