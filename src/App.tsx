import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CategoryFrom from './page/admin/CategoryFrom'
import CategoryList from './page/admin/CategoryList'
import Dashborad from './page/admin/Dashborad'
import PostFrom from './page/admin/PostFrom'
import PostList from './page/admin/PostList'
import ProductFrom from './page/admin/ProductFrom'
import ProductList from './page/admin/ProductList'
import ContactProduct from './page/ContactProduct'
import HomePage from './page/HomePage'
import LayoutAdmin from './page/layout/LayoutAdmin'
import LayoutClient from './page/layout/LayoutClient'
import PostDetail from './page/PostDetail'
import PostPage from './page/PostPage'
import ProductDetail from './page/ProductDetail'
import ProductPage from './page/ProductPage'
import Signin from './page/Signin'
import Signup from './page/Signup'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Routes>
                {/* client */}
                <Route path='/' element={<LayoutClient />}>
                    <Route index element={<HomePage />} />
                    <Route path='products'>
                        <Route index element={<ProductPage />} />
                        <Route path=':_id' element={<ProductDetail />} />

                    </Route>
                    <Route path='contact' element={<ContactProduct />} />
                    <Route path='posts'>
                        <Route index element={<PostPage />} />
                        <Route path=':_id' element={<PostDetail />} />
                    </Route>
                    <Route path='signin' element={<Signin />} />
                    <Route path='signup' element={<Signup />} />
                </Route>
                {/* admin */}
                <Route path='admin' element={<LayoutAdmin />}>
                    <Route index element={<Dashborad />} />
                    <Route path='products'>
                        <Route index element={<ProductList />} />
                        <Route path='create' element={<ProductFrom />} />
                        <Route path='edit/:_id' element={<ProductFrom/>}/>
                    </Route>
                    <Route path='posts'>
                        <Route index element={<PostList />} />
                        <Route path='create' element={<PostFrom />} />
                        <Route path='edit/:_id' element={<PostFrom/>}/>
                    </Route>
                    <Route path='categories'>
                        <Route index element={<CategoryList />} />
                        <Route path='create' element={<CategoryFrom />} />
                        <Route path='edit/:_id' element={<CategoryFrom/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
