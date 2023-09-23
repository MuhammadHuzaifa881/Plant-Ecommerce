import React from 'react'
export default function AddBrand() {
    return (
        <div>
            <h3 className='mb-4'>Add Brand</h3>
            <form action="" className='form-control'>
            <input type="text" placeholder="Enter Brand" className='form-control' />
            <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Brand
          </button>
            </form>
            
        </div>
    )
}
