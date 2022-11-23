import React, {useEffect, useState} from "react";
const axios = require('axios')

export default function Table(){

    const [empData, setEmpData] = useState([{}])

    const getEmpData = async()=>{
        await axios.get('/employee/getAllEmp').then((response)=>{
            setEmpData(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getEmpData()
    }, [])

    return (
        <div className="container mx-auto min-h-[720px] h-max bg-[#171717] py-2 mt-2">
            <div className="border-b-[0.2px] border-b-orange-200"></div>
            <div class="pb-4 bg-white dark:bg-[#171717]  overflow-x-auto">
            <br></br>
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="table-search" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Employees..."/>
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            SSN
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Employee Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Phone
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Role
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {empData?.map((data)=>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {data.ssn}
                                </th>
                                <td class="px-5 py-5 text-sm">
                                    <div class="flex items-center">
                                        <div class="ml-3">
                                            <p class="text-white whitespace-no-wrap">
                                                {data.employee_name}
                                            </p>
                                        </div>
                                        </div>
                                </td>
                                <td class="py-4 px-6">
                                    {data.contact_num}
                                </td>
                                <td class="py-4 px-6">
                                    {data.designation}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}