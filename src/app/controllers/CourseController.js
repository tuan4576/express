const { mongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class CourseController {
    // [GET] /news
    show(req, res, next){
        Course.findOne({ slug: req.params.slug })
        .then((course) => {
            // res.json(course)
            res.render('courses/show', {course: mongooseToObject(course)})
        })
        .catch(next)
    }
    create(req, res, next){
        res.render('courses/create')
    }
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save()
        .then(() => res.redirect('/'))
        .catch(error => {
            
        })
        res.send("course save")
    }

}

module.exports = new CourseController;