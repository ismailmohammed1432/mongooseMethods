import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstname:{
        type:string,
        required:true,
    },
    lastname:{
        type:string,
        required:true,
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    age:{
        type:string,
        required:true,
    }
})

const userModel = mongoose.model("Users",userSchema,"users")

export default userModel