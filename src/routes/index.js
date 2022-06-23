const newRouter = require('./news')
const SiteRouter = require('./site')
function route(app) {
    
    app.use('/news', newRouter)
    app.use('/', SiteRouter)

   
}

module.exports = route;