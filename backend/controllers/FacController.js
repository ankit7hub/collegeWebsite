import FacModel from "../models/FacModel.js";
import bcrypt from "bcryptjs";
const FacRegister = async(req, res) =>{
 try{
    const {facName, facEmail, facMobile, facSp} = req.body;
    if(!facName || !facEmail || !facMobile || !facSp){
        return res.status(400).send({
            status: false,
            message:"Please Fill All Fields"
        })
    }
    const hashPassword = await bcrypt.hash(facMobile, 10);
    const fac = new FacModel(
        {facName, facEmail, facMobile, facSp, facPassword : hashPassword});
    await fac.save();
    return res.status(201).send({
        status:true,
        message:"New Fac Created",
        fac
    })
    }catch(err)
{
    console.log(err);
    return res.status(500).send({
        status:false,
        message:"Error in register callback",
        err,
    })
}
};
const FacDisplay = async(req, res) =>{
    try{
        const fac = await FacModel.find({});
        if(fac.length>0){
           res.status(200).send({
            status: true,
            count:fac.length,
            message: "Get All Fac Records",
            fac,
           }) 
        } else{
              res.status(200).send({
                 status: "Success", 
                 message: "Records not found....",
                             })}
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Fac ",
            err
        })
    }

};
const FacSearch = async(req, res) =>{
    try{
        console.log(req.params.id)
        const fac = await FacModel.findOne({_id:req.params.id});
           res.status(200).send({
            status: true,
            count:fac.length,
            message: "Get Fac Records",
            fac,
           }) 
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Fac ",
            err
        })
    }

};
const FacUpdate = async(req, res) =>{

    try{
        const Fac = await FacModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({
            status:true,
            message:"Fac Updated",
            Fac
        })
        }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message:"Error in fac register callback",
            err,
        })
    }

}
const FacDelete = async(req, res) =>{
    try{
        const fac = await FacModel.findByIdAndDelete({_id:req.params.id});
           res.status(200).send({
            status: true,
            message: "User Deleted",
            fac,
           }) 
   }catch(err)
    {
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Fac ",
            err
        })
    }

};
const FacLogin = async(req, res) => {
    try{
        const {facEmail, facPassword} = req.body;
        // validation
        if(!facEmail || !facPassword){
            return res.status(401).send({
                status:false,
                message:"Please provide email or password"
            })
        }
        const fac = await FacModel.findOne({facEmail});
        if(!facEmail)
        {
            return res.status(200).send({
                status: false,
                message: "Email is not registered"
            })
        } 
        // password
        const isMatch = await bcrypt.compare(facPassword, fac.facPassword);
        if(!isMatch){
            return res.status(401).send({
                status: false,
                message: "Invalid userName or Password"
            })
        }
        return res.status(200).send({
            status: true,
            message: "Login Successfully", 
            user,
        })
    }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message:"Error in Login Callback",
            err,
        })
    }

};
const FacLogout = async(req, res) =>{}

export default {
    FacRegister,
    FacDisplay,
    FacSearch,
    FacUpdate,
    FacDelete,
    FacLogin,
    FacLogout
}