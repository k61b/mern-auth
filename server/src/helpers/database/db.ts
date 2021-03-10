import mongoose from 'mongoose'
import endpoint from '../../lib/endpoint.config'
import IHelperBase from '../../interfaces/IHelperBase.interface'

class ConnectDB implements IHelperBase {

    public uri = endpoint.MONGO_URI

    constructor() {
        this.initHelpers()
    }

    public initHelpers() {
        this.connectDB()
    }

    connectDB = () => {
        mongoose.connect(this.uri, {
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
}

export default ConnectDB