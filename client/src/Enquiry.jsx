import React from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import EnquiryList from './enquiry/EnquiryList.jsx';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Enquiry = () => {
    let [enquirylist,setenquirylist]=useState([]);
    let [formData,setformData]=useState({
        name:'',
        email:'',
        phone:'',
        message:''
    })


    let saveEnquiry =(e)=>{
        e.preventDefault();

        // let formData={
        //     name:e.target.name.value,
        //     email:e.target.email.value,
        //     phone:e.target.phone.value,
        //     message:e.target.message.value
        // }
    
        axios.post('http://localhost:8000/api/website/enquiry/insert', formData)
        .then((response) => {
            toast.success("Data Saved Successfully");
            console.log(response.data);
            setformData({
                name:'',
                email:'',
                phone:'',
                message:''
            });
            getAllEnquiry();
        })
        .catch((error) => {
            console.error(error.response ? error.response.data : error.message);
        });
     
    }
    let getValue=(e)=>{
        let inputName=e.target.name;
        let inputValue=e.target.value;
        let oldData={...formData};

        oldData[inputName]=inputValue;
        setformData(oldData);
    }

    let getAllEnquiry = () => {
  axios.get('http://localhost:8000/api/website/enquiry/view')
    .then((response) => {
      console.log("Raw API response:", response.data);
      return response.data;
    })
    .then((finalData) => {
      if(finalData.status === 1){
        console.log("Setting enquiry list to:", finalData.enquirylist);
        setenquirylist(finalData.enquiry);
      }
    })
    .catch(error => {
      console.error(error);
    });
};


    useEffect(()=>{
        getAllEnquiry()
    },[])
  return (
    <div>
     <ToastContainer/>
    <h1 className='text-[40px]  font-bold text-center py-6'>USER ENQUIRY FORM</h1>
      <div className='grid grid-cols-[30%_auto] gap-5 bg-pink-600 '>
            <div className='bg-gray-400 mx-4 px-4'>
                <h2 className='text-[20px] font-bold'>Enquiry form</h2>
                <form action="" onSubmit={saveEnquiry}>
                    <div className='py-3'>
                        <Label htmlFor="name">Your Name</Label>
                        <TextInput name='name' type="text" value={formData.name} onChange={getValue} placeholder="Your Name" required />
                    </div>
                    <div className='py-3'>
                        <Label htmlFor="email">Your Email</Label>
                        <TextInput name='email' type="text" value={formData.email}  onChange={getValue} placeholder="Your Email" required />
                    </div>
                    <div className='py-3'>
                        <Label htmlFor="phone">Your Phone</Label>
                        <TextInput name='phone' type="text" value={formData.phone} onChange={getValue} placeholder="Your Phone" required />
                    </div>
                    <div className='py-3'>
                        <Label htmlFor="message">Message</Label>
                        <Textarea name='message' value={formData.message} onChange={getValue} placeholder="Message..." required rows={4} />
                    </div>
                    <div className='py-3'>
                         <Button type="submit" className='w-[100%] bg-gray-800'>Submit</Button>
                    </div>
                </form>
            </div>
            <EnquiryList data={enquirylist}/>

      </div>
      
    </div>
  )
}


export default Enquiry
