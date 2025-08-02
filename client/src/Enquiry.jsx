import React, { useState, useEffect } from 'react';
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import EnquiryList from './enquiry/EnquiryList.jsx';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Enquiry = () => {
  const [enquirylist, setEnquiryList] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    _id:''
  });

  // Fetch all enquiries data from backend
  const getAllEnquiry = () => {
    axios.get('http://localhost:8000/api/website/enquiry/view')
      .then((response) => {
        const data = response.data;
        if (data.status === 1) {
          // Confirm backend returns 'enquirylist' or 'enquiry'
          setEnquiryList(data.enquirylist || data.enquiry || []);
        } else {
          setEnquiryList([]);
          toast.error("Failed to fetch enquiries");
        }
      })
      .catch(error => {
        console.error(error);
        toast.error("An error occurred while fetching enquiries");
      });
  };

  useEffect(() => {
    getAllEnquiry();
  }, []);

  // Handle form input changes safely
  const getValue = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Save new or updated enquiry
  const saveEnquiry = (e) => {
    e.preventDefault();

    // Here you could enhance to detect if editing vs creating new

    if(formData._id){
        axios.put(`http://localhost:8000/api/website/enquiry/updated/${formData._id}`,formData)
        .then(()=>{
        toast.success("Data Updated Successfully");
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        getAllEnquiry();
      })
      .catch((error) => {
        console.error(error.response ? error.response.data : error.message);
        toast.error("Failed to update data");
      });

    }else{
        axios.post('http://localhost:8000/api/website/enquiry/insert', formData)
      .then((response) => {
        toast.success("Data Saved Successfully");
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        getAllEnquiry();
      })
      .catch((error) => {
        console.error(error.response ? error.response.data : error.message);
        toast.error("Failed to save data");
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1 className='text-[40px] font-bold text-center py-6'>USER ENQUIRY FORM</h1>
      <div className='grid grid-cols-[30%_auto] gap-5 bg-pink-600'>
        <div className='bg-gray-400 mx-4 px-4'>
          <h2 className='text-[20px] font-bold'>Enquiry form</h2>
          <form onSubmit={saveEnquiry}>
            <div className='py-3'>
              <Label htmlFor="name">Your Name</Label>
              <TextInput
                id="name"
                name='name'
                type="text"
                value={formData.name || ''}
                onChange={getValue}
                placeholder="Your Name"
                required
              />
            </div>
            <div className='py-3'>
              <Label htmlFor="email">Your Email</Label>
              <TextInput
                id="email"
                name='email'
                type="email"
                value={formData.email || ''}
                onChange={getValue}
                placeholder="Your Email"
                required
              />
            </div>
            <div className='py-3'>
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput
                id="phone"
                name='phone'
                type="text"
                value={formData.phone || ''}
                onChange={getValue}
                placeholder="Your Phone"
                required
              />
            </div>
            <div className='py-3'>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name='message'
                value={formData.message || ''}
                onChange={getValue}
                placeholder="Message..."
                required
                rows={4}
              />
            </div>
            <div className='py-3'>
              <Button type="submit" className='w-full bg-gray-800'>{formData._id ? 'Update' :'Save'}</Button>
            </div>
          </form>
        </div>
        <EnquiryList
          data={enquirylist}
          getAllEnquiry={getAllEnquiry}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

export default Enquiry;
