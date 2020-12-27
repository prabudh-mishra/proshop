import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from './data/users.js'
import products from './data/products.js'
import User from './models/UserModel.js'
import Product from "./models/ProductModel.js";
import Order from "./models/OrderModel.js";
import connectDB from "./config/db.js";


dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        const createdUser = await User.insertMany(users)
        const adminUser = createdUser[0]._id
        
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })
        await Product.insertMany(sampleProducts)

        console.log('Data has been imported succcessfully'.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`Error: ${error.message}`.red.inverse.underline.bold)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        console.log('Data has been destroyed succcessfully'.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`Error: ${error.message}`.red.inverse.underline.bold)
        process.exit(1)
    }
}


if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}