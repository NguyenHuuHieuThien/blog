const express = require('express')
const path = require('path')
var morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routes')
app.use(express.static(path.join(__dirname,'public')))
// app.use(morgan('combined'))

//gửi từ html đã có urlencoded xử lý
app.use(express.urlencoded({
  extended: true
}))

//gửi từ code js đã có json xử lý
app.use(express.json())
app.engine('hbs', engine({
  extname:'hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'))

// Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})