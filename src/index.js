const express = require('express')
const path = require('path')
const morgan = require('morgan')
const hbs  = require('express-handlebars');
const db = require('./config/db')
const route  = require('./routes')

db.connect();
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(morgan('combined'))
app.engine('hbs', hbs.engine({
  extname:'.hbs'  
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views')

// Routes init 
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
