import React, { useEffect, useState} from "react";
import MyAccountSidebar from "../../components/MyAccountSidebar";
import '../../../style/scss/myAccount.scss';


import * as url from '../../utils/Url';
import { request } from "../../services/Request";

//import { useSelector, useDispatch } from "react-redux";
//import { userLogged } from "../../redux/action/authActions";


export default function MyAccount() {
  const [data, setData] = useState({fName: '', lName: '', email: '', mobile: '', gender: '', dob: '' });
  
// const abc = axios.get('https://easyshop.webiknows.in/api/loggeduser', {
// 'headers': {
//       'content-type':'application/json',
//       'Authorization': 'Bearer 1|2U4Ho6l0V3y3tFvYpRWSQThihNQQ5wMbGRp5y6yK'
//   }
// });

// console.log(abc);

const getUserData = async () => {
  const result = await request(url.BASE_URL).get("/loggeduser");
  const { user, status, message} = result.data 
  setData(user);
  //console.log(result.data, 'await fetch'); 
}

useEffect(()=> {
  getUserData();
}, [])
  
  //const userData = request(url.BASE_URL).get("/loggeduser");
  //console.log(userData, 'User Res');
  //console.log(userData.PromiseResult.data, 'User Res');

  const updateProfile = (id) => {
    //console.log(id);
  }

  const onChange = (e) => {  
    e.persist();   
    setData({ ...data, [e.target.name]: e.target.value });  
  } 
 
  return (
    <section>
      <div className="container">
      <div className="row m-my-account">
      <MyAccountSidebar />
  
  {/*  my accountsidebar */}
  <div className="col-xs-9 col-md-9 col-lg-9">
    <h3>My Profile</h3>
    <div className="c-account-setting f-13">
      <div>
        <h4>Personal Information</h4>
        <div className="row setting-wrap p-0">
          <div className="col-sm-8 setting-ctn">
            <div className="c-input setting-item">
              <label>Email:</label>
              <input type="email" name="email" className="form-control" value={data.email} onChange={onChange} placeholder="email" />
            </div>
            <div className="setting-item row">
              <div className="col-6">
                <label>First Name:*</label>
                <input type="text" name="Fname" className="form-control" value={data.fName} onChange={onChange} placeholder="Your Name" />
              </div>
              <div className="col-6">
                <label>Last Name:*</label>
                <input type="text" name="lname" className="form-control"  value={data.lName} onChange={onChange} placeholder="Last Name" />
              </div>
            </div>

            <div className="setting-item row">
              <div className="col">
                <label>Mobile:*</label>
                <input type="text" name="mobile" className="form-control" value={data.mobile} onChange={onChange} placeholder="Your Contact Number" />
              </div>
            </div>
            <div className="setting-item j-gender">
              <label style={{marginBottom: '15px'}}>Gender:*</label>
              <div className="gender-item">
                <label className="she-radio">
                  <input type="radio" className="gender" name="gender" id="gender" /> <i />
                </label>
                Male
              </div>
              <div className="gender-item">
                <label className="she-radio">
                  <input type="radio" className="gender" name="gender" id="gender" /> <i /></label>
                Female
              </div>
            </div>
            <div className="c-input setting-item">
              <label>Birthday:*</label>
              <input type="Date" name="dob" placeholder="Birthday" value={data.dob} onChange={onChange}  />
            </div>
          </div>

        </div>
        <div className="col-xs-12 setting-footer-tips p-0">
          <p>We will keep the information you filled in above confidential.</p>
          <button className="btn btn-primary text-uppercase" onClick={updateProfile(1)}>Update</button>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>   
      </div>
    </section>
    
  ); 
}
