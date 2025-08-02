let e=require('express');
const { enquiryInsert, Enquiryview, Enquirydelete, Enquiryupdate } = require('../../controllers/web/enquiryController');
let enquiryRoutes=e.Router();


enquiryRoutes.post("/insert",enquiryInsert)
enquiryRoutes.get("/view",Enquiryview)
enquiryRoutes.delete("/delete/:id",Enquirydelete)
enquiryRoutes.get("/update/:id",Enquiryupdate)

module.exports=enquiryRoutes;