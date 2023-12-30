import mongoose from 'mongoose';
 const FacSchema =  new mongoose.Schema({
    facName:{
        type: String,
        required:[true, "facName is required"]
    },
    facEmail:{
        type: String,
        required:[true, "facEmail is required"]
    },
    facMobile:{
        type: String,
        required:[true, "facMobile is required"]
    },
    facSp:{
        type: String,
    },
    facPassword:{
        type: String,
        required:[true, "facPassword is required"]
    },
 },{timestamps:true})

 const FacModel = mongoose.model('fac', FacSchema);

 export default FacModel;