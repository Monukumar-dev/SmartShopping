import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/action/authActions";

//   "password": "Colorado",
//   "email": "Shaylee59@hotmail.com",

export default function Register() {

  const { loading, userInfo, error, success } = useSelector( (state) => state.auth )

  const dispatch = useDispatch()

  const [data, setData] = useState({firstName: '', lastName: '', email: '', password: '', passwordConfirm: '', mobile: ''});
  //const [error, setError] = useState(false);

  //const apiUrl = "https://6339831366857f698fb72ce1.mockapi.io/api/users";
  const navigate = useNavigate(); 

  // useEffect(()=>{
  //   const auth = localStorage.getItem('user-info');
  //   if (auth) {
  //     navigate('/')
  //   }
  // },[])

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/login')

    // redirect authenticated user to profile screen
    if (userInfo.id) navigate('/user-profile')
    
  }, [navigate, userInfo, success])


  const handleRegister = async (e) => {
    e.preventDefault();
    //console.log(data, 'Local DATA')

    // let result = await axios.post(apiUrl, data);
    // console.log(result.data, 'API RESPONSE')

    // if (result.data == '0') {  
    //   alert('Invalid User'); 
    //   console.log('That user already exisits!');
    // } else { 
    //   console.log("sign up successfully");
    //   localStorage.setItem('user-info',JSON.stringify(result.data));
    //   navigate('/');
    // }
    
    // check if passwords match
    if (data.password !== data.passwordConfirm) {
      alert('Password mismatch')
      return
    }
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
            <h3 className="login-title text-clr mb-4 mt-lg-2">Welcome to Sign up,<br/>
                {/* <small className="">If you have a Qfix ID you can login and save yourself a hassle.</small> */}
             </h3>
        </div>
    </div>
    <div className="row mx-0 w-100">
        <div className="col-sm-12">
        <form className="float-labels" onSubmit={handleRegister}>
            <div className="form-row row gap-0 mx-0">
              <div className="form-group col-6 col-sm-6 col-md-6 ps-0">
                <input type="text" className="form-control" name="firstName" onChange={onChange} value={data.firstName} required />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="form-group col-6 col-sm-6 col-md-6 ps-0">
                <input type="text" className="form-control" name="lastName" onChange={onChange} value={data.lastName} required />
                <label htmlFor="lastName">Last Name</label>
              </div>
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
              <input type="password" className="form-control" name="passwordConfirm" onChange={onChange} value={data.passwordConfirm} required />
              <label htmlFor="passwordConfirm">Confirm Password</label>
            </div>
            <div className="form-group">
              <input type="number" maxLength={10} className="form-control" name="mobile" onChange={onChange} value={data.mobile} required />
              <label htmlFor="mobile">Mobile Number</label>
            </div>
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
          <Link className="txt1 bo1 hov1 text-uppercase secondary-clr" to="/login">Sign IN</Link>
      </div>
      
      </div>

    </>
  ); 
}
