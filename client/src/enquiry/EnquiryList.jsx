import React from 'react'

function EnquiryList() {
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
                    <TableHeadCell>
                    <span className="sr-only">Edit</span>
                    </TableHeadCell>
                    <TableHeadCell>
                    <span className="sr-only">Delete</span>
                    </TableHeadCell>
                </TableRow>
                </TableHead>
                <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    1
                    </TableCell>
                    <TableCell>Me</TableCell>
                    <TableCell>Me@gmail.com</TableCell>
                    <TableCell>278999</TableCell>
                    <TableCell>27cbdverhc8999</TableCell>
                    <TableCell>
                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Edit
                    </a>
                    </TableCell>
                    <TableCell>
                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Delete
                    </a>
                    </TableCell>
                </TableRow>
                </TableBody>
            </Table>
            </div>

        </div>
    </div>
  )
}

export default EnquiryList
