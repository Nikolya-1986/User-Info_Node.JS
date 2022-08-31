//http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=user_info&table=users
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routers/user-router');
const errorController = require('./controllers/error');

const app = express();
app.use(cors());
app.set('port', process.env.PORT || 3001);

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', userRouter);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(app.get('port'), () => {
    console.log(`Web app avalible at http://localhost:${app.get('port')}`);
});
