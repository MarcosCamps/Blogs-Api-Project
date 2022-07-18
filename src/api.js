const express = require('express');
require('express-async-errors');
const loginRoute = require('./routes/loginRoute');
const userRoute = require('./routes/userRoute');
const errorHandler = require('./middleware/errorHandler');
const categoriesRoute = require('./routes/categoriesRoute');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoriesRoute);

app.use(errorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
