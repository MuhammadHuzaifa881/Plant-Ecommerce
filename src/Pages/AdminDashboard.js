import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import { Column } from '@ant-design/plots';
import { Table } from 'antd';
const columns = [
  {
    title: 'SrNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    address: `London, Park Lane no. ${i}`,
    status: `Delivered / Undeliverd  ${i}`
  });
}
const AdminDashboard = () => {
  const data = [
    {
      type: 'Janurary',
      sales: 38,
    },
    {
      type: 'February',
      sales: 52,
    },
    {
      type: 'March',
      sales: 61,
    },
    {
      type: 'April',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'June',
      sales: 38,
    },
    {
      type: 'July',
      sales: 38,
    },
    {
      type: 'August',
      sales: 38,
    },
    {
      type: 'September',
      sales: 48,
    },
    {
      type: 'Octuber',
      sales: 38,
    },
    {
      type: 'November',
      sales: 38,
    },
    {
      type: 'December',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Months',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p>Total</p>
            <h4 className='mb-0'>$100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'><BsArrowDownRight />32%</h6>
            <p className='mb-0'>Compared to April 2023</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p>Total</p>
            <h4 className='mb-0'>$100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'><BsArrowDownRight />12.0%</h6>
            <p className='mb-0'>Compared to April 2023</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p>Total</p>
            <h4 className='mb-0'>$100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'><BsArrowDownRight />32%</h6>
            <p className='mb-0'>Compared to April 2023</p>
          </div>
        </div>
      </div>
      {/* income Statics Graph */}
      <div className="mt-4">
        <h3 className="mb-4">Income Statics</h3>
        <div className="h-25">
          <Column {...config} />
        </div>
      </div>
      {/* gh */}
      <div className="mt-4">
        <h3 className="mb-4">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  )
}
export default AdminDashboard;