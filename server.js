import express from 'express';
import connectDatabase from './config/db';

//  init express server
const app = express();

// Connect to DB
connectDatabase();

// API endpoints
app.get('/', (req,res) =>
    res.send('http get request sent to root api endpoint')
);



// Connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));

