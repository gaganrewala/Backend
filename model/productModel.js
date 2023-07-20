import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Product = mongoose.model('Product',productSchema)
export default Product