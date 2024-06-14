import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice } from './Data';

export default function Bills() {
    let params = useParams();
    console.log(params.invoiceId);
   let invoice =  getInvoice(params.invoiceId)
  return (
    <main className='flex flex-col py-5 border my-4 w-1/3 mx-auto'>
        <h2>Total Due:{invoice.price}</h2>
        <p>{invoice.name}:{invoice.roll_number}</p>
        <p>Due Date: {invoice.price}</p>
    </main>
  )
}
