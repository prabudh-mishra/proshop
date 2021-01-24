import express, { response } from 'express'
import dotenv from'dotenv'
import colors from 'colors'
import connectDB from "./config/db.js"
import { notFound, errorHandler } from "./middleware/ErrorMiddleware.js";

import productRoutes from './routes/ProductRoutes.js'
import userRoutes from "./routes/UserRoutes.js"
import orderRoutes from "./routes/OrderRoutes.js";

dotenv.config()
connectDB()

const app = express()
app.use(express.json()) //used to accept json data from server
const _PORT_ = process.env.PORT || 5000

app.listen(_PORT_, console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${_PORT_}`.yellow.bold))

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req, res) => { res.send(process.env.PAYPAL_CLIENT_ID) })

app.use(notFound)
app.use(errorHandler)

app.get('/', (request, response) => {
    response.send('API is running....')
})