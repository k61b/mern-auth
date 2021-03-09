import express from 'express'
import { Application } from 'express'
import mongoose from 'mongoose'
import endpoint from './lib/endpoint.config'

class App {
    public app: Application
    public port: number

    constructor(appInit: { port: any; middleWares: any; controllers: any; }) {
        this.app = express()
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
        this.connectDB()
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    private connectDB() {
        mongoose.connect(endpoint.MONGO_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
            .then(() => {
                console.log("MongoDb Connection Successful")
            })
            .catch(err => {
                console.error(err)
            })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App