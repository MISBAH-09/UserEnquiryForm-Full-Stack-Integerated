import React from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import EnquiryList from './enquiry/EnquiryList';


const Enquiry = () => {
    let saveEnquiry =(e)=>{
        alert("data saved");
        e.preventDefault();
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
                        <TextInput type="text" placeholder="Your Name" required />
                    </div>
                    <div className='py-3'>
                        <Label htmlFor="email">Your Email</Label>
                        <TextInput type="email" placeholder="Your Email" required />
                    </div>
                    <div className='py-3'>
                        <Label htmlFor="phone">Your Phone</Label>
                        <TextInput type="text" placeholder="Your Phone" required />
                    </div>
                    <div className='py-3'>
                        <Label htmlFor="message">Message</Label>
                        <Textarea placeholder="Message..." required rows={4} />
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
