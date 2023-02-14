import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/action/authActions";

//   "password": "Colorado",
//   "email": "Shaylee59@hotmail.com",

export default function Login() {

  const {loading, userInfo, error} = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  const [data, setData] = useState({email: '', password: ''});
  //const [error, setError] = useState(false);

  const navigate = useNavigate(); 

  // useEffect(()=>{
  //   const auth = localStorage.getItem('user-info');
  //   if (auth) {
  //     navigate('/')
  //   }
  // },[])

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      //navigate('/')
    }
  }, [navigate, userInfo])

  const handleLogin = async (e) => {
    e.preventDefault();

    // const data1 = {email: data.Email, password: data.Password};
    // console.log(data, 'Req Data');

    // let result = await axios.get(apiUrl, data1);

    // console.log(result.data, 'Result');

    // if (result.data.email == data1.email && result.data.password == data1.password) {
    //     console.log('User login Successfully'); 
    //     localStorage.setItem('user-info', JSON.stringify(result.data))
    //     navigate('/')
    // } else {
    //   setError(true);
    //   console.log({Error: 'No User found'});
    //   //setError(true);
    // }

    dispatch(userLogin(data))

  }
  const onChange = (e) => {
    e.preventDefault();
    setData({...data, [e.target.name]: e.target.value})

  }

 
  return (
    <>
      <div className="shadow lg-loginbox mt-5 lg-bg-white mx-auto">
      <form className="float-labels" onSubmit={handleLogin} autoComplete="off">
        <div className="loginBox">
          <div className="row mx-0">
            <div className="col text-center">
              <h3 className="login-title text-clr mb-4 mt-lg-2">
                Welcome Back,
                {/* <br />
                <small className="small">
                  If you have a Smart Shopping Id you can login and save yourself a hassle.
                </small> */}
              </h3>
              {error && <p className="text-secondary">User Not Found 😔</p> }
              
            </div>
          </div>
          <div className="row mx-0 w-100">
            <div className="col-sm-12">
              <div className="" id="signin">
                <div className="login-input-content">
                  <div className="form-group">
                    <input type="text" className="form-control pl-0" name="email" onChange={onChange} value={data.email} required />
                    <label htmlFor="email">Enter email/mobile to login</label>
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" className="form-control pl-0"  onChange={onChange} value={data.password} required />
                    {/* <i className="far fa-eye" id="togglePassword" style={{ marginLeft: 426, cursor: "pointer" }}/> */}
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="text-end my-3">
                    <Link className="text-primary text-decoration-none" to="/forget-password">Forgot Password?</Link>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary white w-100" disabled={loading}>
                      {loading ? 'loading...' : 'Login'}
                    </button>
                  </div>
                </div>
                <div className="text-center w-100 pt-3 pb-3">
                  <span className="txt1"> OR </span>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <a href="#" className="btn btn-outline-primary w-100">Request OTP</a>
                  </div>
                </div>
                <div className="text-center w-100 pt-4 pb-5 pb-lg-3">
                  <span className="txt1">Don't have an account?   </span>
                  <Link className="txt1 bo1 hov1 primary-clr" to="/register">Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  end loginBox */}

  </form>
</div>

    </>
  ); 
}
