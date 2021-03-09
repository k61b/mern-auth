import * as bodyParser from 'body-parser'

import App from './app'
import endpoint from './lib/endpoint.config'

import UserController from './controllers/user.controller'

const app = new App({
    port: endpoint.PORT,
    controllers: [
        new UserController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ]
})

app.listen()