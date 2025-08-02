let e=require('express');
const { enquiryInsert, Enquiryview } = require('../../controllers/web/enquiryController');
let enquiryRoutes=e.Router();


enquiryRoutes.post("/insert",enquiryInsert)
enquiryRoutes.get("/view",Enquiryview)
module.exports=enquiryRoutes;