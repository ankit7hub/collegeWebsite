import CourseModel from "../models/CourseModel.js";
const CourseRegister = async(req, res) =>{
 try{
    const {courseName, courseDur, courseFees, courseDesc} = req.body;
    if(!courseName || !courseDur || !courseFees||!courseDesc){
        return res.status(400).send({
            status: false,
            message:"Please Fill All Fields"
        })
    }
    const Course = new CourseModel(
        {courseName, courseDur, courseFees, courseDesc});
    await Course.save();
    return res.status(201).send({
        status:true,
        message:"New Course Created",
        Course
    })
    }catch(err)
{
    console.log(err);
    return res.status(500).send({
        status:false,
        message:"Error in course register callback",
        err,
    })
}
};
const CourseDisplay = async(req, res) =>{
    try{
        const Course = await CourseModel.find({});
        if(Course.length>0){
           res.status(200).send({
            status: true,
            count:Course.length,
            message: "Get All Course Records",
            Course,
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
            message: "Erron in Display All Course ",
            err
        })
    }

};
const CourseSearch = async(req, res) =>{
    try{
        console.log(req.params.id)
        const Course = await CourseModel.findOne({_id:req.params.id});
           res.status(200).send({
            status: true,
            count:Course.length,
            message: "Get Course Records",
            Course,
           }) 
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Course ",
            err
        })
    }

};
const CourseUpdate = async(req, res) =>{
    try{
        const Course = await CourseModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({
            status:true,
            message:"Course Updated",
            Course
        })
        }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message:"Error in course register callback",
            err,
        })
    }
}
const CourseDelete = async(req, res) =>{
    try{
        const Course = await CourseModel.findByIdAndDelete({_id:req.params.id});
           res.status(200).send({
            status: true,
            message: "Course Deleted",
            Course,
           }) 
   }catch(err)
    {
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Course ",
            err
        })
    }

};

export default {
    CourseRegister,
    CourseDisplay,
    CourseSearch,
    CourseUpdate,
    CourseDelete
}