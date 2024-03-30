const router=require('express').Router();
const { Lesson, CourseProblem, Assessments ,Module, Course }=require('../models/course_work')

router.get('/allcourses',(req,res)=>{
    Course.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        console.log(error)
    })
})

router.get('/allmodules/:courseid', (req, res) => {
    const courseId = req.params.courseid;

    Course.findOne({ courseid: courseId })
        .then(course => {
            if (!course) {
                return res.status(404).send("Course not found.");
            }

            const moduleIds = course.modules; // Array of module ObjectId values
            Module.find({ _id: { $in: moduleIds } })
                .then(modules => {
                    console.log("Modules:", modules);
                    res.send(modules);
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).send("Error fetching modules.");
                });
        })
        .catch(error => {
            console.log(error);
            res.status(500).send("Error fetching course.");
        });
});






module.exports=router