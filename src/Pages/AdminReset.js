import React from 'react';
import CustomInput from '../Component/CustomInput';

export default function AdminReset() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 login-box">
      {/* Rounded span */}
      <div className="rounded-span">
      <span style={{"--i":0}}></span>
        <span style={{"--i":1}}></span>
        <span style={{"--i":2}}></span>
        <span style={{"--i":3}}></span>
        <span style={{"--i":4}}></span>
        <span style={{"--i":5}}></span>
        <span style={{"--i":6}}></span>
        <span style={{"--i":7}}></span>
        <span style={{"--i":8}}></span>
        <span style={{"--i":9}}></span>

        <span style={{"--i":10}}></span>
        <span style={{"--i":11}}></span>
        <span style={{"--i":12}}></span>
        <span style={{"--i":13}}></span>
        <span style={{"--i":14}}></span>
        <span style={{"--i":15}}></span>
        <span style={{"--i":16}}></span>
        <span style={{"--i":17}}></span>
        <span style={{"--i":18}}></span>
        <span style={{"--i":19}}></span>

        <span style={{"--i":20}}></span>
        <span style={{"--i":21}}></span>
        <span style={{"--i":22}}></span>
        <span style={{"--i":23}}></span>
        <span style={{"--i":24}}></span>
        <span style={{"--i":25}}></span>
        <span style={{"--i":26}}></span>
        <span style={{"--i":27}}></span>
        <span style={{"--i":28}}></span>
        <span style={{"--i":29}}></span>

        <span style={{"--i":30}}></span>
        <span style={{"--i":31}}></span>
        <span style={{"--i":32}}></span>
        <span style={{"--i":33}}></span>
        <span style={{"--i":34}}></span>
        <span style={{"--i":35}}></span>
        <span style={{"--i":36}}></span>
        <span style={{"--i":37}}></span>
        <span style={{"--i":38}}></span>
        <span style={{"--i":39}}></span>

        <span style={{"--i":40}}></span>
        <span style={{"--i":41}}></span>
        <span style={{"--i":42}}></span>
        <span style={{"--i":43}}></span>
        <span style={{"--i":44}}></span>
        <span style={{"--i":45}}></span>
        <span style={{"--i":46}}></span>
        <span style={{"--i":47}}></span>
        <span style={{"--i":48}}></span>
        <span style={{"--i":49}}></span>

        {/* Form */}
        <form className='p-3 col-sm-12 col-lg-12 col-md-12'>
          <h3 className='text-center mt-3' style={{color:"#0ef"}}>Forgot Password</h3>
          <CustomInput i_type="password" i_label="Password" id="pass"></CustomInput>
          <CustomInput i_type='password' i_label="Confirm Password" id="pass"></CustomInput>
          <div className='d-flex justify-content-center mt-3'>
            <button type="submit" style={{backgroundColor:"#0ef"}} className="adm-login w-100">Send Link</button>
          </div>
        </form>
      </div>
    </div>
  )
}