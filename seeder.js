import mongoose from "mongoose";
import colors  from "colors";
import User  from "./model/user1Model.js";
import Product  from "./model/productModel.js";
import connectDB from "./config/db.js";
import users from './data/users.js'
import products from './data/products.js'
connectDB()
const importData = async ()=>{
    try{
        await Product.deleteMany()
        await User.deleteMany()

        const createduser = await User.insertMany(users)

        const adminUser = createduser[0]._id
        const sampleProducts = products.map(product=>{
            return {...product,user:adminUser}
        })

        await Product.insertMany(sampleProducts)
        console.log("Data Imported !".green.inverse)
        process.exit()
    }
    catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}
const destroyData = async ()=>{
    try{
        await Product.deleteMany()
        await User.deleteMany()
        console.log("Data Destroyed !".red.inverse)
        process.exit()
    }
    catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}
if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData()
}