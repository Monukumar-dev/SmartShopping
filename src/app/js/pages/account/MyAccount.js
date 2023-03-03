import React, { useEffect} from "react";
import MyAccountSidebar from "../../components/MyAccountSidebar";
import '../../../style/scss/myAccount.scss';

import { useSelector, useDispatch } from "react-redux";
import { userLogged } from "../../redux/action/authActions";


export default function MyAccount() {
  
  //const { userInfo } = useSelector((state)=> state.auth)
  //console.log(userInfo, 'auth');
  const dispatch = useDispatch();

    const data = dispatch(userLogged());
    //console.log(userLogged, 'dispatch');

  const updateProfile = (id) => {
    //dispatch(userLogin(data))
    //console.log(id);

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
              <input type="email" placeholder="email" name="email" id="email" />
            </div>
            <div className="setting-item row">
              <div className="col-6">
                <label>First Name:*</label>
                <input type="text" name="first_name" id="first_name" className="form-control" placeholder="Your Name"  />
              </div>
              <div className="col-6">
                <label>Last Name:*</label>
                <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Last Name" />
              </div>
            </div>

            <div className="setting-item row">
              <div className="col">
                <label>Mobile:*</label>
                <input type="text" name="mobile" id="mobile" className="form-control" placeholder="Your Contact Number" />
              </div>
            </div>
            <div className="setting-item j-gender">
              <label style={{marginBottom: '15px'}}>Gender:*</label>
              <div className="gender-item">
                <label className="she-radio">
                  <input type="radio" className="gender" name="gender" id="gender" checked /> <i />
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
              <input type="Date" name="dob" id="dob" placeholder="Birthday" defaultValue />
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
