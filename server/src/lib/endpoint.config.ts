import { resolve } from 'path'
import { config } from 'dotenv'

config({ path: resolve(__dirname, '../../.env') })

export default {
    PORT: process.env.PORT ?? '',
    MONGO_URI: process.env.MONGO_URI ?? '',
    JWT_SECRET : process.env.JWT_SECRET ?? ''
}