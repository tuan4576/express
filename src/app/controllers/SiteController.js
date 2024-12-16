const Course = require('../models/Course')
const  { mutipleMongooseToObject } =  require('../../util/mongoose')
class SiteController {
    // [GET] /news
    // async index(req, res) {
    //     try {
    //         const courses = await Course.find({});
    //         res.json(courses); // Gửi dữ liệu nếu thành công
    //     } catch (err) {
    //         res.status(400).json({ error: 'Error' }); // Gửi lỗi nếu xảy ra vấn đề
    //     }
    // }
    index(req,res,next){
        Course.find({})
            .then(courses => {
                res.render('home', { courses : mutipleMongooseToObject(courses) })
            })
            .catch(next);
    }
    
}

module.exports = new SiteController; 