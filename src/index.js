const express = require('express');
const app = express();
const morgan = require('morgan');

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middleware
app.unsubscribe(morgan('dev'));
app.use(express.urlencoded( { extended : false } ));
app.use(express.json());

// Routes
app.use(require('./routes/index'));
app.use('/api/productos', require('./routes/productos'));

app.listen(app.get('port'), () => {
    console.log("Server escuchando en el puerto " + app.get('port'));
});

