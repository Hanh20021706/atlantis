import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCategries } from '../../api/category';
import { createProduct, getProduct, updateProduct } from '../../api/product';
import { CATEGORY_TYPE } from '../../types/category';
import { PRODUCT_TYPE } from '../../types/product';

const ProductFrom = () => {

    const navigate = useNavigate();
    const { _id } = useParams();

    const [categries, setCategories] = useState<CATEGORY_TYPE[]>([])

    const [imgBase64, setImgBase64] = useState<any>('');

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            price: 0,
            desc: '',
            img: '',
            category:''
        }
    });

    const onSubmit: SubmitHandler<PRODUCT_TYPE> = (data) => {
        const submitData = {
            ...data,
            img: imgBase64
        }
        if (_id) {
            hanhdleUpdateProduct(submitData)
        }
        return handleSubmitProduct(submitData);
    }

    // create product
    const handleSubmitProduct = async (data: PRODUCT_TYPE) => {
        const response = await createProduct(data);
        if (response.status === 200) {
            navigate('/admin/products')
            toast.success("you have successfully added", { autoClose: 1000 })
        }
    }

    // update product
    const hanhdleUpdateProduct = async (data: PRODUCT_TYPE) => {
        const response = await updateProduct(_id, data);
        if (response.status === 200) {
            navigate('/admin/products')
            toast.success("you have successfully fixed", { autoClose: 1000 })
        }
    }
    // tim den product 
    const handleGetProduct = async (_id: string) => {
        const response = await getProduct(_id);
        if (response.status === 200) {
            reset({
                ...response.data,

            })
        }
    }

    const handleGetCates = async() => {
        const response = await getCategries();
        setCategories(response.data)
    }
    // imgs

    const getEventResult = (event: any) => {
        if (event && event.target && typeof event.target.result == 'string') {
            return event.target.result;
        }
        return
    }

    const handleChangeFile = (event: any) => {
        const file = event.target.files[0];
        if (!file) {
            toast.warning("no file", { autoClose: 1000 });
            return
        } else if (file > 5000000000) {
            toast.warning("file too big");
            return

        }
        const render = new FileReader();
        render.onload = (e) => {
            const image = new Image();
            if (e && e.target) {
                image.src = getEventResult(e);
                setImgBase64(e.target.result)
            }
        }
        render.readAsDataURL(file);
    }



    useEffect(() => {
        handleGetCates();
        if (_id) {
            handleGetProduct(_id)
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

                                    <label className="block text-sm font-medium text-gray-700"> Name </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text"
                                            {
                                            ...register('name', {
                                                required: { value: true, message: "khong bo trong" }, minLength: { value: 5, message: "nhap chua du ky tu" }
                                            })
                                            }
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                    </div>
                                    <div className="" style={{ color: 'red', marginTop: '5px' }}>
                                        {errors.name ? errors.name.message : ''}

                                    </div>

                                </div>
                                <div className="">

                                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Price </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="number"
                                            {
                                            ...register('price', {
                                                required: { value: true, message: "khong bo trong" }, validate: (value) => value > 0

                                            })
                                            }
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                    </div>
                                    <div className="" style={{ color: 'red', marginTop: '5px' }}>
                                        {errors.price ? errors.price.message : ''}

                                    </div>

                                </div>
                                <div className="">

                                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Desc </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <textarea
                                            {
                                            ...register('desc')
                                            }
                                            className="mt-1 w-full px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />

                                    </div>

                                </div>
                                <div className="">

                                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> category </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <select
                                        {...register('category')}
                                        className="slec-cate w-full border px-8 py-2  shadow-sm border-gray-300 placeholder-gray-400 rounded-md  focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" >
                                       {
                                           categries.map((category, index) => (
                                            <option value={category._id} key={index}> {category.name}</option>
                                           ))
                                       }
                                       
                                        </select>

                                       
                                   

                                </div>

                            </div>




                            <div>
                                <label className="block text-sm font-medium text-gray-700"> Cover photo </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">

                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">


                                                <input type="file" className="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"

                                                    onChange={(event) => handleChangeFile(event)}
                                                />
                                                <div className="text-center" style={{ marginLeft: '60px' }}>
                                                    <img src={imgBase64} width={200} style={{ marginTop: '20px', textAlign: 'center', borderRadius: '2px' }} alt="" />
                                                </div>

                                            </label>


                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                        </div>
                </div>
            </form>
        </div>
            </div >


        </div >
    )
}

export default ProductFrom
