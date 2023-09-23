import React from 'react'
export default function AddCategory() {
    return (
        <div>
            <h3 className='mb-4'>Add Category</h3>
            <form action="" className='form-control'>
            <input type="text" placeholder="Enter Category" className='form-control' />
            <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Category
          </button>
            </form>
            
        </div>
    )
}
