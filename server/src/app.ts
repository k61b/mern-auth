import express from 'express'
import { Application } from 'express'

class App {
    public app: Application
    public port: number

    constructor(appInit: { port: any; controllers: any; }) {
        this.app = express()
        this.port = appInit.port

        this.routes(appInit.controllers)
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App