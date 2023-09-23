import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import axios from 'axios'
// Admin pages
// import Adminsidebar from './Component/admins/adminsidebar';
import AdminLogin from './Pages/AdminLogin';
import AdminForget from './Pages/AdminForget';
import AdminReset from './Pages/AdminReset';
import MainLayout from './Component/MainLayout'
import AdminCustomer from './Pages/AdminCustomer';
import AdminDashboard from './Pages/AdminDashboard';
import AdminEnquiries from './Pages/AdminEnquiries';
import Orders from './Pages/Orders'

// Catalog Sidebar
import AddColor from './Pages/Catalog/AddColor';
import ColorList from './Pages/Catalog/ColorList';
import BrandList from './Pages/Catalog/BrandList';
import AddCategory from './Pages/Catalog/AddCategory';
import CategoryList from './Pages/Catalog/CategoryList';
import ProductList from './Pages/Catalog/ProductList';
import AddBrand from './Pages/Catalog/AddBRand';
import AddProduct from './Pages/Catalog/AddProduct';

// Blogs
import BlogList from './Pages/Blog/BlogList';
import BlogCatlist from './Pages/Blog/BlogCatlist';
import AddBlog from './Pages/Blog/AddBlog';
import AddBlogCategory from './Pages/Blog/AddBlogCategory';
export default function App() {
  return (
    <>
      <Routes>
        {/* Admin sidebar */}
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/AdminForget' element={<AdminForget />} />
        <Route path='/AdminReset' element={<AdminReset />} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='enquiries' element={<AdminEnquiries />} />
          
          {/* Blogs Path Router*/}
          <Route path='blog-list' element={<BlogList />} />
          <Route path='blog-category-list' element={<BlogCatlist/>}/>
          <Route path='blog' element={<AddBlog/>}/>
          <Route path='blog-category' element={<AddBlogCategory/>}/>
          <Route path='order' element={<Orders/>}/>
          <Route path='customer' element={<AdminCustomer/>}/>
          {/* Color */}
          <Route path='color' element={<AddColor/>} />
          <Route path='list-color' element={<ColorList/>} />
          {/* Brand */}
          <Route path='brand' element={<AddBrand/>}/>
          <Route path='list-brand' element={<BrandList/>}/>
          {/* Category */}
          <Route path='category' element={<AddCategory/>}/>
          <Route path='list-category' element={<CategoryList/>}/>
          {/*  Product */}
          <Route path='product' element={<AddProduct/>}/>
          <Route path='product-list' element={<ProductList/>}/>

        </Route>
      </Routes>
    </>
  )
}
