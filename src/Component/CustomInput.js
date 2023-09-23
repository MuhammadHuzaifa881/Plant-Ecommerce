import React from 'react'

const CustomInput = (props) => {
    const{i_type,i_label,i_id,i_class}=props;
  return (
    <div>
      {/* <h1>Custom Input</h1> */}
      <label htmlFor={i_label} className='mt-3' style={{color:"#0ef"}}>{i_label}</label>
      <input type={i_type} className={`form-control input-login ${i_class}`} id={i_id} placeholder={i_label} />
     
    </div>
  )
}

export default CustomInput;