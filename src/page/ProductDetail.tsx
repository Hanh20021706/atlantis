import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../api/product';
import { PRODUCT_TYPE } from '../types/product';

const ProductDetail = () => {


    const {_id} = useParams();

    const [product, setProduct] = useState<PRODUCT_TYPE>();

    const handleGetProductDetail = async () => {
        const response = await getProduct(_id);
        setProduct(response.data);
    }

    useEffect(() => {
        handleGetProductDetail();
    }, [])

    return (
        <div>

            <div className="container">
                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden  sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                   
                    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                        <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                            <img src={product?.img} alt="Two each of gray, white, and black shirts arranged on table." className="object-center object-cover" />
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                           <div className="" style={{width: '50%', margin: 'auto'}}>
                           <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product?.name}</h2>
                            <section aria-labelledby="information-heading" className="mt-2">
                                <h3 id="information-heading" className="sr-only">Product information</h3>
                                <p className="text-2xl text-gray-900" style={{color: 'red'}}>${product?.price}</p>
                                {/* Reviews */}
                                <div className="mt-6">
                                    <h4 className="sr-only">Reviews</h4>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                         
                                            <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            {/* Heroicon name: solid/star */}
                                            <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            {/* Heroicon name: solid/star */}
                                            <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            {/* Heroicon name: solid/star */}
                                            <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            {/* Heroicon name: solid/star */}
                                            <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                        <p className="sr-only">3.9 out of 5 stars</p>
                                        <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                                    </div>
                                </div>
                            </section>
                            <section aria-labelledby="options-heading" className="mt-10">
                                <h3 id="options-heading" className="sr-only">Product options</h3>
                                <form>
                                    {/* Colors */}
                                    <div>
                                        <h4 className="text-sm text-gray-900 font-medium">Color</h4>
                                        <fieldset className="mt-4">
                                            <legend className="sr-only">Choose a color</legend>
                                            <div className="flex items-center space-x-3">
                 
                                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                    <input type="radio" name="color-choice" defaultValue="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                                                    <p id="color-choice-0-label" className="sr-only">White</p>
                                                    <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full" />
                                                </label>
               
                                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                    <input type="radio" name="color-choice" defaultValue="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
                                                    <p id="color-choice-1-label" className="sr-only">Gray</p>
                                                    <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full" />
                                                </label>
               
                                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                                    <input type="radio" name="color-choice" defaultValue="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                                                    <p id="color-choice-2-label" className="sr-only">Black</p>
                                                    <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full" />
                                                </label>
                                            </div>
                                        </fieldset>
                                    </div>
                                    {/* Sizes */}
                                    <div className="mt-10">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm text-gray-900 font-medium">Size</h4>
                                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                                        </div>
                                        <fieldset className="mt-4">
                                            <legend className="sr-only">Choose a size</legend>
                                            <div className="grid grid-cols-4 gap-4">
                                                {/* Active: "ring-2 ring-indigo-500" */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" defaultValue="XXS" className="sr-only" aria-labelledby="size-choice-0-label" />
                                                    <p id="size-choice-0-label">XXS</p>
                  
                                                    <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                                </label>
                                                {/* Active: "ring-2 ring-indigo-500" */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" defaultValue="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                                                    <p id="size-choice-1-label">XS</p>
                  
                                                    <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                                </label>
                                                {/* Active: "ring-2 ring-indigo-500" */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" defaultValue="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                                                    <p id="size-choice-2-label">S</p>
                 
                                                    <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                                </label>
                                                {/* Active: "ring-2 ring-indigo-500" */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" defaultValue="M" className="sr-only" aria-labelledby="size-choice-3-label" />
                                                    <p id="size-choice-3-label">M</p>
                   
                                                    <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                                </label>
                                                {/* Active: "ring-2 ring-indigo-500" */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" defaultValue="L" className="sr-only" aria-labelledby="size-choice-4-label" />
                                                    <p id="size-choice-4-label">L</p>
                  
                                                    <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                                </label>
                                                {/* Active: "ring-2 ring-indigo-500" */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" defaultValue="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
                                                    <p id="size-choice-5-label">XL</p>
                   
                                                    <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                                </label>
                                                {/* Active: "ring-2 ring-indigo-500" */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" defaultValue="XXL" className="sr-only" aria-labelledby="size-choice-6-label" />
                                                    <p id="size-choice-6-label">XXL</p>
                 
                                                    <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                                                </label>
                                                {/* Active: "ring-2 ring-indigo-500" */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-gray-50 text-gray-200 cursor-not-allowed">
                                                    <input type="radio" name="size-choice" defaultValue="XXXL" disabled className="sr-only" aria-labelledby="size-choice-7-label" />
                                                    <p id="size-choice-7-label">XXXL</p>
                                                    <div aria-hidden="true" className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                                                        <svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                        </svg>
                                                    </div>
                                                </label>
                                            </div>
                                           
                                        </fieldset>
                                    </div>
                                    <button style={{backgroundColor: '#903479'}} type="submit" className="mt-6 w-full  border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
                                    <div className="post-meta mb20 leading-normal" style={{ marginTop: '30px',lineHeight: '1.8', color: '#101010' }}>
                                                    <p className=''>
                                                       {product?.desc}
                                                    </p>
                                                </div>
                                </form>
                            </section>
                           </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail
