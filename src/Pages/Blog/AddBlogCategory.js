import React from 'react'
export default function AddBlogCategory() {
    return (
        <div>
            <h3 className='mb-4'>Add Blog Category</h3>
            <form action="" className='form-control'>
            <input type="text" placeholder="Enter Blog Category" className='form-control' />
            <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Blog Category
          </button>
            </form>
            
        </div>
    )
}
