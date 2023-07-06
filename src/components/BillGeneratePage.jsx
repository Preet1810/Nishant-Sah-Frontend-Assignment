import React from 'react'
import Table from './Table'
const BillGeneratePage=() => {
    const data=[
        { itemName: '16" V/d GM', hsnCode: '8437', gst: '18 %', quantity: '1.0 pair', taxrate: '4800.00', rate: '4,067.80', per: 'Pair', disc: '', amount: '4,067.80' },
        { itemName: 'Belt Fastener 2.5/8"', hsnCode: '7326', gst: '18 %', quantity: '40.0 pcs', taxrate: '9.99', rate: '8.47', per: 'Pcs', disc: '', amount: '338.80' },
        { itemName: 'Belt Fastener 2.5/8', hsnCode: '7326', gst: '18 %', quantity: '3.0 pcs', taxrate: '12.33', rate: '10.45', per: 'Pcs', disc: '', amount: '31.35' },
    ]
    return (
        <div className=''>
            <div className='flex'>
                <div>
                    <label htmlFor="salesManual" className=''><span className='bg-[#2a67b1] text-white font-bold py-1 px-2'>Sales_Manual</span> <b>No.   </b></label>
                    <input type="Number" id="salesManual" defaultValue="16" className='text-center bg-[#f3ffe9]' />
                </div>
                <div className=' flex-col ml-auto'>
                    <p><b>5-Apr-23</b></p>
                    <p>Wednesday</p>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <p className='text-[#676b6d] italic'>Voucher class<span className='ml-28 font-bold'>:Sales</span></p>
            </div>
            <div>
                <div className='flex'>
                    <p>Party A/c name<span className='ml-6 mr-3'>:</span><b>Online Transfer Customer</b></p>
                    {/* <p className='flex mx-auto'>Price Level <span className=''>:</span></p> */}
                </div>
                <p className='italic text-[#747a7e] font-bold '>Current balance<span className='ml-5 mr-4'>:</span>30,72,124.97 Dr</p>
                <p className=''>Sales Ledger<span className='ml-11 mr-4'>:</span><b>GST Sales</b></p>
                <p className='italic text-[#747a7e] font-bold'>Current balance<span className='ml-5 mr-4'>:</span>82,71,250.99 Cr</p>
            </div>
            <div className=''>
                <div className="">
                    <Table data={data} />
                </div>
                <div className='flex'>
                    <p className='border-t-4 ml-auto mb-2'>4,437.95</p>
                </div>
                <div className='flex'>
                    <p>CGST</p>
                    <p className='ml-auto'>399.41</p>
                </div>
                <div className='flex'>
                    <p>SGST</p>
                    <p className='ml-auto'>399.41</p>
                </div>
                <div className='flex'>
                    <p>Round Off</p>
                    <p className='ml-auto'>0.23</p>
                </div>
                <div className='flex pt-32'>
                    <p>Narration:</p>
                    <div class="line h-0.5  w-full"></div>
                    <p className='ml-auto '>5,237.00</p>

                </div>
            </div>
        </div>
    )
}

export default BillGeneratePage