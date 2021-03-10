import * as bodyParser from 'body-parser'

import App from './app'
import endpoint from './lib/endpoint.config'
import ConnectDB from './helpers/database/db'

import UserController from './controllers/user.controller'

const app = new App({
    port: endpoint.PORT,
    controllers: [
        new UserController(),
    ],
    helperS: [
        ConnectDB
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ]
})

app.listen()