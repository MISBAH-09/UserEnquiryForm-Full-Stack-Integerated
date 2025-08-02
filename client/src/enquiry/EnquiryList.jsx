import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Toast } from "flowbite-react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

  function EnquiryList({data = [], getAllEnquiry}) {
    let deleteRow = (delId) => {
    axios.delete(`http://localhost:8000/api/website/enquiry/delete/${delId}`)
      .then(() => {
        toast.success("Delete Successfully");
        getAllEnquiry();
      })
      .catch(error => {
        toast.error("Delete Failed");
        console.error(error);
      });
  }

return (

  <div >
    <div className='bg-pink-600 mx-4 px-4'>
      <h2 className='text-[20px] font-bold p-5'>Enquiry form</h2>
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
          data.map((item,index)=>{
            return (
             <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index+1}
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.message}</TableCell>
                <TableCell>
                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Edit
                </a>
                </TableCell>
                <TableCell>
                <a href="#" onClick={()=>deleteRow(item._id)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Delete
                </a>
                </TableCell>
            </TableRow>
            )
          })
        : 
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell colSpan={7} className='text-center'>No data Found</TableCell>
        </TableRow>
        }
        </TableBody>
      </Table>
      </div>
    </div>
  </div>
)
}

export default EnquiryList
