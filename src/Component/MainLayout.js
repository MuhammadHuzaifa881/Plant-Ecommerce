import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {IoIosNotifications} from 'react-icons/io'
import AdminPic from '../Assets/Admin/AdminPic.jpeg'
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineOrderedList,
  AiOutlineBgColors,
} from 'react-icons/ai';
import { ImBlog } from 'react-icons/im'
import { FaClipboardList, FaBloggerB } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi';
import { SiBrandfolder } from 'react-icons/si';
import { MdPeopleOutline } from 'react-icons/md';
import { TbBrandProducthunt } from "react-icons/tb";
import { Layout, Menu,theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo demo-logo-vertical">
          <h2 className='text-center font-weigh' style={{ color: "white" }}>
            <span className="sm-Logo">DC</span>
            <span className="lg-logo">MobileIsta</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            if (key === "signout") {
            }
            else {
              navigate(key)
            }
          }}
          items={[
            {
              key: '1',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customer',
              icon: <MdPeopleOutline className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart className='fs-4' />,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <TbBrandProducthunt className='fs-4' />,
                  label: 'Add product',
                },
                {
                  key: 'product-list',
                  icon: <AiOutlineOrderedList className='fs-4' />,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder className='fs-4' />,
                  label: 'Brand',
                },
                {
                  key: 'list-brand',
                  icon: <SiBrandfolder className='fs-4' />,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Category',
                },
                {
                  key: 'list-category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Color',
                },
                {
                  key: 'list-color',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Color List',
                },
              ]
            },
            {
              key: 'order',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Order',
            },
            {
              key: 'mainblog',
              icon: <FaBloggerB className='fs-4' />,
              label: 'Blogs',
              children: [
                {
                  key: 'blog',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Blog Category list',
                }
              ]
            },
            {
              key: 'enquiries',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className='d-flex justify-content-between'
          style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed)
            }
          )}
          {/* <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          /> */}
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
              <IoIosNotifications className='fs-4'/>
              <span className='badge bg-warning rounded-circle position-absolute'>3</span>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <div>
                <img src={AdminPic} alt="" width={32} height={32} />
              </div>
              <div>
                <h5 className='mb-0'>Muhammad Huzaifa</h5>
                <p className='mb-0'>huzaifanasir258@gmail.com</p>
              </div>
              <div></div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;