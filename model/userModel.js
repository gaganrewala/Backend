import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{type:String},
    role:{type:String},
    city:{type:String},
    card:{type:String},
    status:{type:String},
    row:{type:Number}
},{
    timestamps:true
})
const User  = mongoose.model('User',userSchema)
export default User