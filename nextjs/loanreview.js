import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router';
import {motion as m} from 'framer-motion';
import Link from "next/link";
import DataTable from '../components/datatable';

const inter = Inter({ subsets: ['latin'] })

export default function LoanReview() {
  //Router
  const router = useRouter();

  return (
    <main className="h-screen flex">
    <div className="flex text-black h-auto">
    <div className="">


  
    <div className="h-auto w-full bg-gray-500">
        <div className="flex items-center justify-between bg-gray-900 text-white py-2 px-4 h-auto">
          <strong className="text-lg">Loans To Review Before Assignment</strong>
          <div className="space-x-2">
            <button className="bg-blue-500 hover:bg-gray-500 text-black font-bold px-4 rounded-full">Save and Close</button>
            <button className="bg-blue-500 hover:bg-gray-500 text-black font-bold px-4 rounded-full">No</button>
            <button className="bg-blue-500 hover:bg-gray-500 text-black font-bold px-4 rounded-full">Cancel</button>
          </div>
        </div>

        <br />

        <div className='grid grid-cols-2'>
          <div className="block col-lg-1 col-md-2 col-start-1">
            <p className="border border-gray-300 font-bold">Loan Number</p>
            <input type="text" name="textboxName" placeholder="Enter value" />
        </div>

        <div className="block col-lg-1 col-md-2 col-start-2">
            <p className="border border-gray-300 font-bold">Customer Name</p>
            <input type="text" name="textboxName" placeholder="Enter value" />
          </div>
        </div>
        
        <br></br>
        <div className='grid grid-cols-2'>

          <div className="block col-lg-1 col-md-2 col-start-1">
            <p className="border border-gray-300 font-bold">Loan Amount</p>
          
            <input type="text" name="textboxName" placeholder="Enter value" />
          </div>

          <div className="block col-lg-1 col-md-2 col-start-2">
            <p className="border border-gray-300 font-bold">Date Booked</p>
            <input type="text" name="textboxName" placeholder="Enter value" />
          </div>
        </div>
        <br></br>


          <div className="col-lg-1 col-md-2">
            <p className="border border-gray-300 font-bold">Quality Review Required</p>
          </div>
          <div className="grid grid-rows-1  grid-cols-2">
          <div className="block col-lg-1 col-md-2 col-start-1">
            <div className="flex space-x-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold px-4 rounded-full"> Yes</button>
            <button button class="bg-blue-500 hover:bg-blue-700 text-black font-bold px-4 rounded-full">No</button>
            <button button class="bg-blue-500 hover:bg-blue-700 text-black font-bold px-4 rounded-full">Hold</button>
</div>
</div>
</div>
<DataTable />
      </div>
    </div>
  
    </div>


    </main>
    )
}
  
  



