import React from 'react'
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
export default function AdminCustomer() {
  return (
    <div>
      <h1>Customer</h1>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}
