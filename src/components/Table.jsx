import React, { useState } from 'react';
import { options } from '../options';
const Table=({ data }) => {
    const [selectedRow, setSelectedRow]=useState(null);
    const handleRowClick=(index) => {
        setSelectedRow(index);
    };

    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th className="py-2 w-6/12 border-b-4 border-t-4 text-left border-r-4">Name of Item</th>
                    <th className="py-2 w-1/12 border-b-4  border-t-4 border-r-4">HSN/SAC Code</th>
                    <th className="py-2 w-1/12 border-b-4  border-t-4 border-r-4">GST %</th>
                    <th className='py-2  border-b-4 border-t-4'>Quantity</th>
                    <th className='py-2  border-b-4 border-t-4'>Rate <p>(include of tax)</p></th>
                    <th className='py-2 border-b-4 border-t-4 text-right'>Rate</th>
                    <th className='py-2  border-b-4 text-left border-t-4'>  per</th>
                    <th className='py-2 border-b-4 text-left border-t-4'>Dics %</th>
                    <th className='py-2 border-b-4 text-right border-t-4'>Amount</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr
                        key={index}
                        className={`${selectedRow===index? 'bg-[#feedc2]':'bg-[#f3ffe9]'
                            }`}
                        onClick={() => handleRowClick(index)}
                    >
                        <td className="py-2 px-4 border-b-4 border-r-4">
                            <select
                                className={`${selectedRow===index? 'bg-[#fee8af]':'bg-[#f3ffe9]'}`}

                                value={row.column3}
                            >
                                {options.map((option) => (
                                    <option key={option} value={option} defaultValue={row.className}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td className="text-center border-b-4 border-r-4">
                            <input
                                type="number"
                                className={`${selectedRow===index? 'bg-[#fee8af]':'bg-[#f3ffe9]'} text-center w-24`}
                                defaultValue={row.hsnCode} />
                        </td>
                        <td className="text-center border-b-4 border-r-4">
                            <input
                                type="text"
                                className={`${selectedRow===index? 'bg-[#fee8af]':'bg-[#f3ffe9]'}  text-center w-24`}
                                defaultValue={row.gst} />
                        </td>
                        <td className="text-center border-l">
                            <input
                                type="text"
                                className={`${selectedRow===index? 'bg-[#fee8af]':'bg-[#f3ffe9]'} text-center w-20`}
                                defaultValue={row.quantity} />
                        </td>
                        <td className=" text-center ">
                            <input
                                type="number"
                                className={`${selectedRow===index? 'bg-[#fee8af]':'bg-[#f3ffe9]'} text-center w-20`}
                                defaultValue={row.taxrate} />
                        </td>
                        <td className="">
                            <input
                                type="text"
                                className={`${selectedRow===index? 'bg-[#fee8af]':'bg-[#f3ffe9]'} text-right w-20`}
                                defaultValue={row.rate} />
                        </td>
                        <td className="">
                            <input
                                type="text"
                                className={`${selectedRow===index? 'bg-[#fee8af]':'bg-[#f3ffe9]'} text-left w-20`}
                                defaultValue={row.per} />
                        </td>
                        <td className="">
                            <input
                                type="text"
                                className={`${selectedRow===index? 'bg-[#fee8af]':'bg-[#f3ffe9]'} text-left w-20`}
                                defaultValue={row.disc} />
                        </td>
                        <td className="">
                            <input
                                type="text"
                                className={`${selectedRow===index? 'bg-[#fee8af]':'bg-[#f3ffe9]'} text-right w-20`}
                                defaultValue={row.amount} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
