import mongoose from "mongoose";
const MONGO_URL ='mongodb+srv://saikiran:kiranvirat@cluster0.kz8cxid.mongodb.net/?retryWrites=true&w=majority'
const connectDB= async()=>{
    try{
        const conn = await mongoose.connect(MONGO_URL , { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`MongDB Connected :${conn.connection.host}`.cyan.underline);
    }catch(error){
        console.log(`Error :${error.massage}`.red.underline.bold)
    }
}
export default connectDB