import SubjectModel from "../models/SubjectModel.js";
import bcrypt from "bcryptjs";
const SubjectRegister = async(req, res) =>{
 try{
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
const SubjectDisplay = async(req, res) =>{
    try{
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }
};
const SubjectSearch = async(req, res) =>{
    try{
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }

};
const SubjectDelete = async(req, res) =>{
    try{
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }
};
const SubjectUpdate = async(req, res) =>{
    try{
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }
};
export default {
    SubjectRegister,
    SubjectDisplay,
    SubjectSearch,
    SubjectUpdate,
    SubjectDelete,
}