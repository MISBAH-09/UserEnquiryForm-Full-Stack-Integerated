import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from 'axios';
import { toast } from 'react-toastify';

function EnquiryList({ data = [], getAllEnquiry, setFormData }) {

  const deleteRow = (delId) => {
    axios.delete(`http://localhost:8000/api/website/enquiry/delete/${delId}`)
      .then(() => {
        toast.success("Deleted Successfully");
        getAllEnquiry();
      })
      .catch(error => {
        toast.error("Delete Failed");
        console.error(error);
      });
  };

  const updateRow = (editId) => {
    axios.get(`http://localhost:8000/api/website/enquiry/update/${editId}`)
      .then((response) => {
        console.log(response.data.updateres);
        // Confirm your backend sends enquiry data under response.data.enquiry
        const enquiryData = response.data.updateres;
        if (enquiryData) {
          setFormData({
            _id: enquiryData._id || '',
            name: enquiryData.name || '',
            email: enquiryData.email || '',
            phone: enquiryData.phone || '',
            message: enquiryData.message || ''
          });
        } else {
          toast.error("No data found for editing");
        }
      })
      .catch(error => {
        toast.error("Failed to load data for editing");
        console.error(error);
      });
  };

  return (
    <div>
      <div className='bg-pink-600 mx-4 px-4'>
        <h2 className='text-[20px] font-bold p-5'>Enquiry List</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>Sr no.</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Email</TableHeadCell>
                <TableHeadCell>Phone</TableHeadCell>
                <TableHeadCell>Message</TableHeadCell>
                <TableHeadCell>Edit</TableHeadCell>
                <TableHeadCell>Delete</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              {
                data.length > 0 ?
                  data.map((item, index) => {
                    if (!item) return null;
                    return (
                      <TableRow key={item._id || index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {index + 1}
                        </TableCell>
                        <TableCell>{item.name || 'N/A'}</TableCell>
                        <TableCell>{item.email || 'N/A'}</TableCell>
                        <TableCell>{item.phone || 'N/A'}</TableCell>
                        <TableCell>{item.message || 'N/A'}</TableCell>
                        <TableCell>
                          <a href="#" onClick={e => { e.preventDefault(); updateRow(item._id) }} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Edit
                          </a>
                        </TableCell>
                        <TableCell>
                          <a href="#" onClick={e => { e.preventDefault(); deleteRow(item._id) }} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Delete
                          </a>
                        </TableCell>
                      </TableRow>
                    );
                  })
                  :
                  <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell colSpan={7} className='text-center'>No data found</TableCell>
                  </TableRow>
              }
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default EnquiryList;
