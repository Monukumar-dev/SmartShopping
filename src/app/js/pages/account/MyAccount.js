import React, { useEffect, useState} from "react";
import moment from 'moment';
import MyAccountSidebar from "../../components/MyAccountSidebar";
import '../../../style/scss/myAccount.scss';


import * as url from '../../utils/Url';
import { request } from "../../services/Request";


export default function MyAccount() {
  const [data, setData] = useState({name: '', lName: '', email: '', mobile: '', gender: '', dob: '' });


  const isLogin =  JSON.parse(localStorage.getItem('user-info'))
  const token = isLogin.accessToken;
  //console.log(token, 'token');
  
  const getUserData = async () => {
    try {
      if (!token) {
        throw new Error('Token is missing');
      }
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      };
  
      const result = await request(url.BASE_URL).get('/profile', config);
      
      if (result.status === 200) {
        const { name, lName, email, mobile, gender,dob  } = result.data;
        
        let tempdob = moment(dob).format('YYYY-MM-DD')

        setData(prevState => ({
          ...prevState,
          name: name,
          lName: lName,
          email: email,
          mobile: mobile,
          gender:gender,
          dob:tempdob,
        }));
      } else {
        console.error('Error fetching data:', result.message || 'Unknown error');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };
  

useEffect(()=> {
  getUserData();
}, [])

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
                <input type="text" name="Fname" className="form-control" value={data.name} onChange={onChange} placeholder="Your Name" />
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
                  <input type="radio" className="gender" name="gender" id="gender" checked={data.gender == 'Male'} /> <i />
                </label>
                Male
              </div>
              <div className="gender-item">
                <label className="she-radio">
                  <input type="radio" className="gender" name="gender" id="gender" checked={data.gender == 'Female'} /> <i /></label>
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
