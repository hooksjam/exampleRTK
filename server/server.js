/* globals process __dirname*/

// Main packages
import express from 'express'
import webpack from 'webpack'
import cors from 'cors'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

// Inject test configuration
if(util.isTest()) {
    require('dotenv').config({path: path.resolve(__dirname, '..', '.env.server.test')})
}

// Other 
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import path from 'path'
// import { serve, setup } from 'swagger-ui-express'
// import { safeLoad } from 'js-yaml'
import { readFileSync } from 'fs'
import util from './util'

//file upload module
import multiparty  from 'connect-multiparty'
import fs from 'fs'


// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef  
    module.hot.accept() // eslint-disable-line no-undef  
}

var port = process.env.PORT

// Setup express and configure parsing
var app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// Development middleware
if (util.isDevelopment()) {
    const configWP = require('../webpack.dev.config')
    const compiler = webpack(configWP)
    app.use(webpackDevMiddleware(compiler, {publicPath: configWP.output.publicPath}))
    app.use(webpackHotMiddleware(compiler))
    app.use(morgan('dev'))
} else if(util.isProduction()) {

}

app.use(`${process.env.APP_PATH}/assets`, express.static(path.join(__dirname, 'public')))

// Main service
app.get('/*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(port, () => {
    console.log(`listening online on port ${port}!`)
})

export default app