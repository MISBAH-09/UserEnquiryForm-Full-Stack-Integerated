const enquiryModel = require("../../models/enquirymodel");

let enquiryInsert=(request, response)=>{
    let { sName, sEmail, sPhone, sMessage } = request.body;

  if (!sName || !sEmail || !sPhone || !sMessage) {
    return response.status(400).send("Missing required fields");
  }

  let enquiry = new enquiryModel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage
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


module.exports={enquiryInsert}