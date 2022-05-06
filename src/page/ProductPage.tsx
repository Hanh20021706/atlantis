import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getProducts } from '../api/product';
import BannerProduct from '../components/BannerProduct'
import { PRODUCT_TYPE } from '../types/product'

const ProductPage = () => {

    const [products, setProducts] = useState<PRODUCT_TYPE[]>([]);

    const handleGetProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    }

    useEffect(() => {
        handleGetProducts();
    }, [])

    return (
        <div>
            <div className="">
                <BannerProduct />
            </div>
            <div className="">
                <section className="probootstrap-section">
                    <div className="container">
                        <div className="row">
                            {
                                products.map((product, index) => (
                                    <div key={index} className="col-md-3 col-sm-6 col-xs-12">
                                        <div className="probootstrap-room">
                                            <Link to={`${product._id}`}>
                                                <a href="#"><img src={product.img} alt="Free Bootstrap Template by uicookies.com" className="img-responsive" /></a>
                                            </Link>
                                            <div className="text">
                                                <h3 style={{ fontSize: '20px', margin: '5px 0px' }}>{product.name}</h3>
                                                <p > <strong style={{ color: 'red' }}>${product.price}</strong></p>
                                                <div className="post-meta mb20" style={{ marginTop: '5px' }}>
                                                    <p>
                                                        {product.desc}
                                                    </p>
                                                </div>
                                                <p><a href="#" className="btn btn-primary" role="button" style={{ padding: '7px 35px' }}>BY NOW</a></p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }




                        </div>

                        

                    </div>
                </section>

            </div>
        </div>
    )
}

export default ProductPage
