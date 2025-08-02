const enquiryModel = require("../../models/enquirymodel");

let enquiryInsert=(request, response)=>{
    let { name, email, phone, message } = request.body;

  if (!name || !email || !phone || !message) {
    return response.status(400).send("Missing required fields");
  }

  let enquiry = new enquiryModel({
    name,
    email,
    phone,
    message
  });

  enquiry.save()
    .then(() => {
      response.send("Data saved");
    })
    .catch((err) => {
      console.error("Error saving enquiry:", err);
      response.status(500).send("Failed to save: " + err.message);
    });
}
let Enquiryview=async(request,respnse)=>{
    let enquiry=await enquiryModel.find();
    respnse.send({status:1,enquiry:enquiry});
}

let Enquirydelete=async(request,respnse)=>{
    let delId=request.params.id;
    let enquirydel=await enquiryModel.deleteOne({_id:delId});
    respnse.send({status:1,message:"delete successfully",enquirydel});

}
let Enquiryupdate=async(request,respnse)=>{
    let editId=request.params.id;
    let updateres=await enquiryModel.findOne({_id:editId});
    respnse.send({status:1,message:"Find successfully",updateres});

}



module.exports={enquiryInsert,Enquiryview,Enquirydelete,Enquiryupdate}