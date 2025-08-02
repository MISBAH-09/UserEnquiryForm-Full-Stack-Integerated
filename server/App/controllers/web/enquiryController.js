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


module.exports={enquiryInsert}