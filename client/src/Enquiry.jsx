import React from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import EnquiryList from './enquiry/EnquiryList.jsx';
import axios from 'axios';

const Enquiry = () => {
    let saveEnquiry =(e)=>{
        e.preventDefault();

        let formData={
            sName:e.target.name.value,
            sEmail:e.target.email.value,
            sPhone:e.target.phone.value,
            sMessage:e.target.message.value
        }

        axios.post('http://localhost:8000/api/website/enquiry/insert', formData)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error.response ? error.response.data : error.message);
        });

    }
  return (
    <div>
    <h1 className='text-[40px]  font-bold text-center py-6'>USER ENQUIRY FORM</h1>
      <div className='grid grid-cols-[30%_auto] gap-5 bg-pink-600 '>
            <div className='bg-gray-400 mx-4 px-4'>
                <h2 className='text-[20px] font-bold'>Enquiry form</h2>
                <form action="" onSubmit={saveEnquiry}>
                    <div className='py-3'>
                        <Label htmlFor="name">Your Name</Label>
                        <TextInput name='name' type="text" placeholder="Your Name" required />
                    </div>
                    <div className='py-3'>
                        <Label htmlFor="email">Your Email</Label>
                        <TextInput name='email' type="text" placeholder="Your Email" required />
                    </div>
                    <div className='py-3'>
                        <Label htmlFor="phone">Your Phone</Label>
                        <TextInput name='phone' type="text" placeholder="Your Phone" required />
                    </div>
                    <div className='py-3'>
                        <Label htmlFor="message">Message</Label>
                        <Textarea name='message' placeholder="Message..." required rows={4} />
                    </div>
                    <div className='py-3'>
                         <Button type="submit" className='w-[100%] bg-gray-800'>Submit</Button>
                    </div>
                </form>
            </div>
            <EnquiryList/>

      </div>
      
    </div>
  )
}


export default Enquiry
