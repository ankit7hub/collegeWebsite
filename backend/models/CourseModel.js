import mongoose from 'mongoose';
 const CourseSchema =  new mongoose.Schema({
    courseName:{
        type: String,
        required:[true, "courseName is required"]
    },
    courseDur:{
        type: Number,
        required:[true, "courseDur is required"]
    },
    courseFees:{
        type: String,
        required:[true, "courseFees is required"]
    },
    courseDesc:{
        type: String,
    },
 },{timestamps:true})

 const CourseModel = mongoose.model('course', CourseSchema);

 export default CourseModel;