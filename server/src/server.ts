import App from './app'
import endpoint from './lib/endpoint.config'

import UserController from './controllers/user.controller'

const app = new App({
    port: endpoint.PORT,
    controllers: [
        new UserController(),
    ]
})

app.listen()