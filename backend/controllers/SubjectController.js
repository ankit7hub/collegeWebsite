import SubjectModel from "../models/SubjectModel.js";
const SubjectRegister = async(req, res) =>{
 try{
    const {courseName, subjectName, sem, subjectType,subjectMaxMarks} = req.body;
    if(!courseName || !subjectName || !sem||!subjectType||!subjectMaxMarks){
        return res.status(400).send({
            status: false,
            message:"Please Fill All Fields"
        })
    }
    const Subject = new SubjectModel(
        {courseName, subjectName, sem, subjectType,subjectMaxMarks});
    await Subject.save();
    return res.status(201).send({
        status:true,
        message:"New Subject Created",
        Subject
    })
    }catch(err)
{
    console.log(err);
    return res.status(500).send({
        status:false,
        message:"Error in subject register callback",
        err,
    })
}
};
const SubjectDisplay = async(req, res) =>{
    try{
        const Subject = await SubjectModel.find({});
        if(Subject.length>0){
           res.status(200).send({
            status: true,
            count:Subject.length,
            message: "Get All Subject Records",
            Subject,
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
            message: "Erron in Display All Subject ",
            err
        })
    }

};
const SubjectSearch = async(req, res) =>{
    try{
        console.log(req.params.id)
        const Subject = await SubjectModel.findOne({_id:req.params.id});
           res.status(200).send({
            status: true,
            count:Subject.length,
            message: "Get Subject Records",
            Subject,
           }) 
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Subject ",
            err
        })
    }

};
const SubjectUpdate = async(req, res) =>{
    try{
        const Subject = await SubjectModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({
            status:true,
            message:"Subject Updated",
            Subject
        })
        }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message:"Error in subject register callback",
            err,
        })
    }

}
const SubjectDelete = async(req, res) =>{
    try{
        const Subject = await SubjectModel.findByIdAndDelete({_id:req.params.id});
           res.status(200).send({
            status: true,
            message: "Subject Deleted",
            Subject,
           }) 
   }catch(err)
    {
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Subject ",
            err
        })
    }

};

export default {
    SubjectRegister,
    SubjectDisplay,
    SubjectSearch,
    SubjectUpdate,
    SubjectDelete
}