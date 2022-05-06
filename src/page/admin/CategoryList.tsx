import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getCategries, removeCategry } from '../../api/category'
import { CATEGORY_TYPE } from '../../types/category'

const CategoryList = () => {

    const [categories, setCategoties] = useState<CATEGORY_TYPE[]>([])

    const handleGetCategories = async () => {
        const response = await getCategries()
        setCategoties(response.data)
    }

    const ondelete = async (_id: number) => {
        const response = await removeCategry(_id);
        if(response.status === 200){
            handleGetCategories();
            toast.success("you have successfully deleted", { autoClose: 1000 })

        }
    }

    useEffect(() => {
        handleGetCategories();
    }, [])

    return (
        <div>
            <div className="max-w-[84rem]  mx-auto">

                <div className="flex my-8 justify-between ">
                    <h2 className="font-sans text-2xl font-bold uppercase"> CATEGORIES MANAGEMENT </h2>
                    <div className="">
                        <Link to={'/admin/categories/create'}>
                            <a href="" className="sm:ml-3">
                                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    {/* Heroicon name: solid/check */}
                                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Thêm Mới
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>


                <div className="-my-0 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <div className="mt-5 flex lg:mt-0 lg:ml-4">
                            </div>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-slate-200 w-24 ">
                                    <tr>
                                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            id
                                        </th>
                                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            name
                                        </th>

                                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            edit
                                        </th>
                                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            delete
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        categories.map((category, index) => (
                                            <tr key={index}>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 text-center"> {index + 1} </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 text-center"> {category.name} </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 text-center">
                                                    <Link to={`/admin/categories/edit/${category._id}`}>
                                                        <i className="fa-solid fa-pen-to-square" style={{ color: '#FFA500', fontSize: '20px' }} />

                                                    </Link>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 text-center">
                                                    <button onClick={() => { if (window.confirm("delete the item")) { ondelete(category._id as number) } }}>
                                                        <i className="fa-solid fa-trash-can" style={{ color: "red", fontSize: '20px' }} />

                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        ))
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoryList
