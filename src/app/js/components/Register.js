import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN, ROOT } from "../utils/Url";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/action/authActions";

export default function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, userInfo, error, success } = useSelector( (state) => state.auth )
  const isLogin =  userInfo?.token ? true : false;

  const [data, setData] = useState({name: '', email: '', password: '', password_confirmation: '', tc: 'true'});
  
  useEffect(()=>{
    if (isLogin) {
      navigate(ROOT)
    }
  },[isLogin])


  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(data, 'Local DATA')
    
    // check if passwords match
      // if (data.password !== data.password_confirmation) {
      //   alert('Password mismatch')
      //   //return
      // }

    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
  }

  const onChange = (e) => {
    e.preventDefault();
    setData({...data, [e.target.name]: e.target.value})

  }

 
  return (
    <>
    
      <div className="shadow lg-loginbox mt-5 lg-bg-white mx-auto">
      <div className="row mx-0">
        <div className="col text-center">
            <h3 className="login-title text-clr mb-4 mt-lg-2">Welcome to Sign up</h3>
             {error? <p className="text-secondary">{error} 😔</p> : ''}
        </div>
    </div>
    <div className="row mx-0 w-100">
        <div className="col-sm-12">
        <form className="float-labels" onSubmit={handleRegister}>
            <div className="form-row row gap-0 mx-0">
              <div className="form-group col-12 col-sm-12 col-md-12 ps-0">
                <input type="text" className="form-control" name="name" onChange={onChange} value={data.name} required />
                <label htmlFor="name">Name</label>
              </div>
              {/* <div className="form-group col-6 col-sm-6 col-md-6 ps-0">
                <input type="text" className="form-control" name="lastName" onChange={onChange} value={data.lastName} required />
                <label htmlFor="lastName">Last Name</label>
              </div> */}
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" onChange={onChange} value={data.email} required />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password" onChange={onChange} value={data.password}  required />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password_confirmation" onChange={onChange} value={data.password_confirmation} required />
              <label htmlFor="password_confirmation">Confirm Password</label>
            </div>
            {/* <div className="form-group">
              <input type="number" maxLength={10} className="form-control" name="mobile" onChange={onChange} value={data.mobile} required />
              <label htmlFor="mobile">Mobile Number</label>
            </div> */}
            <div className="text-center my-4">
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? <i className="fas fa-spinner"></i> : 'Register'}
              </button>
            </div>
          </form>

        </div>
    </div>
    <div className="text-center mb-2 w-100">
          <span className="txt1">Allready have an account? </span>
          <Link className="txt1 bo1 hov1 text-uppercase secondary-clr" to={LOGIN}>Sign IN</Link>
      </div>
      
      </div>

    </>
  ); 
}
