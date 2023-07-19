import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router';
import {motion as m} from 'framer-motion';
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function LoanQualityReview() {
  //Router
  const router = useRouter();

  return (
    <main className="h-screen flex">
    <div className="flex text-black h-auto">
    <div className="">

  <div className="h-auto w-full bg-gray-500">
        <div className="flex items-center justify-between bg-gray-900 text-white py-2 px-4 h-auto">
          <strong className="text-lg">Update Loan Category</strong>
          <div className="space-x-2">
            <button className="btn btn-info btn-outline-dark btn-sm">Save and Close</button>
            <button className="btn btn-info btn-outline-dark btn-sm">No</button>
            <button className="btn btn-info btn-outline-dark btn-sm">Cancel</button>
          </div>
        </div>

        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="border border-gray-300 font-bold p-2">Loan Category</p>
          </div>
          <div className="col-span-1">
            <input type="text" name="textboxName" placeholder="Enter value" className="w-full" />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="reviewRequired"
                id="yesRadio"
                value="Yes"
                className="form-checkbox"
              />
              <label
                htmlFor="yesRadio"
                className="border border-gray-300 font-bold p-2"
              >
                Manually Assign Only (Non Pre QR)
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="border border-gray-300 font-bold p-2">Group</p>
          </div>
          <div className="col-span-1">
            <select className="custom-select w-full" aria-label="Product Type">
              <option selected>Select</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="reviewRequired"
                id="noRadio"
                value="No"
                className="form-checkbox"
              />
              <label
                htmlFor="noRadio"
                className="border border-gray-300 font-bold p-2"
              >
                Active
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="border border-gray-300 font-bold p-2">Category Description</p>
          </div>
          <div className="col-span-1">
            <input type="text" name="textboxName" placeholder="Enter value" className="w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="border border-gray-300 font-bold p-2">Loan Type</p>
          </div>
          <div className="col-span-1">
            <select className="custom-select w-full" aria-label="Loan Type">
              <option selected>Select</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="border border-gray-300 font-bold p-2">Loan Amount</p>
          </div>
          <div className="col-span-1">
            <input type="text" name="textboxName" placeholder="Enter value" className="w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="border border-gray-300 font-bold p-2">Date Booked</p>
          </div>
          <div className="col-span-1">
            <input type="text" name="textboxName" placeholder="Enter value" className="w-full" />
          </div>
        </div>
      </div>
      </div>
        </div>

    </main>
  )
}