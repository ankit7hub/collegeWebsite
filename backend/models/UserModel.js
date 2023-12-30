import mongoose from 'mongoose';
 const UserSchema =  new mongoose.Schema({
    userName:{
        type: String,
        required:[true, "userName is required"]
    },
    userEmail:{
        type: String,
        required:[true, "userEmail is required"]
    },
    userMobile:{
        type: Number,
        required:[true, "userMobile is required"]
    },
    userCourse:{
        type: String,
        required:[true, "userCourse is required"]
    },
    userPassword:{
        type: String,
        required:[true, "userPassword is required"]
    },
 },{timestamps:true})

 const UserModel = mongoose.model('user', UserSchema);

 export default UserModel;