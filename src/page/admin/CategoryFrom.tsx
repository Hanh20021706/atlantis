import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { createCategry, getCategry, updateCategry } from '../../api/category';
import { CATEGORY_TYPE } from '../../types/category';

const CategoryFrom = () => {

    const navigate = useNavigate();
    const {_id} = useParams();

    const {register, handleSubmit, formState: {errors} , reset} = useForm({
        defaultValues: {
            name: ''
        }
        
    })

    const onSubmit:SubmitHandler<CATEGORY_TYPE> = (data) => {
        const submitData = {
            ...data
        }
        if(_id){
            return handleUpdateCate(submitData);
        }
        return handleSubmitCate(submitData)
    }

    const handleSubmitCate = async (data: CATEGORY_TYPE) => {
        const response = await createCategry(data);
        if(response.status === 200){
            navigate('/admin/categories');
            toast.success("you have successfully added", { autoClose: 1000 })
        } 
    }

      // update product
      const handleUpdateCate = async (data: CATEGORY_TYPE) => {
        const response = await updateCategry(_id, data);
        if (response.status === 200) {
            navigate('/admin/categories')
            toast.success("you have successfully fixed", { autoClose: 1000 })
        }
    }
    // tim den product 
    const handleGetCate = async (_id: string) => {
        const response = await getCategry(_id);
        if (response.status === 200) {
            reset({
                ...response.data,

            })
        }
    }

    useEffect(() => {
        if(_id){
            handleGetCate(_id)
        }
    }, [_id])

  return (
    <div>
       <div className="" style={{ margin: 'auto', width: '50%' }}>
                <h2 style={{ fontSize: '25px', margin: '10px 0px' }} className="font-semibold ">
                    Product Management
                </h2>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div className="">

                                    <label className="block text-sm font-medium text-gray-700"> title </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text"
                                            {
                                            ...register('name', {
                                                required: {value: true, message: "khong bo trong" } , minLength: {value: 5, message: "nhap chua du ky tu"}
                                            })
                                            }
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                    </div>
                                    <div className="" style={{color: 'red', marginTop: '5px'}}>
                                        {errors.name ? errors.name.message : ''} 
                                     
                                    </div>

                                </div>
                             

                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default CategoryFrom
