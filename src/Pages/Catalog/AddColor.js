import React from 'react'
export default function AddColor() {
    return (
        <div>
            <h3 className='mb-4'>Add Color</h3>
            <form action="" className='form-control'>
            <input type="color" placeholder="Enter Color" className='form-control' />
            <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Color
          </button>
            </form>
            
        </div>
    )
}
