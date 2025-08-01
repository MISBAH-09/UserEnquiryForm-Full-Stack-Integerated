let e=require('express');
const { enquiryInsert } = require('../../controllers/web/enquiryController');
let enquiryRoutes=e.Router();


enquiryRoutes.post("/insert",enquiryInsert)
module.exports=enquiryRoutes;