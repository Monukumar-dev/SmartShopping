import React, { useEffect} from "react";
import MyAccountSidebar from "../../components/MyAccountSidebar";
import '../../../style/scss/myAccount.scss';

export default function ChangePassword() {

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
  <h3>EDIT PASSWORD</h3>
  <p className="text-center m-0">If you want to change your password, you can edit it here.</p>
  <div className="c-account-setting f-13">
    <p id="errMsg" style={{color: 'blue'}} />
    <div className="row setting-wrap p-0">
      <div className="col-sm-8 setting-ctn">
        <div className="c-input setting-item">
          <label>Old Password:*</label>
          <input type="password" placeholder name="old_password" id="old_password" />
        </div>
        <div className="c-input setting-item">
          <label>New Password:*</label>
          <input type="password" placeholder name="new_password" id="new_password" />
        </div>
        <div className="c-input setting-item">
          <label>Confirm Password:*</label>
          <input type="password" placeholder name="confirm_password" id="confirm_password" />
        </div>
      </div> {/*end col-8*/}
      <div className="col-sm-3 col-sm-offset-1 setting-image">
        {/*<div class="person-img">
              <img id="j-person-img img-fluid" src="https://i.pinimg.com/280x280_RS/33/3d/76/333d760d1b50850ae98aceff01106d5a.jpg">
              <div class="upload-btn">Upload a Photo</div>
          </div>*/}
      </div>
      <div className="col-xs-12 col-sm-12 setting-footer-tips pl-1">
        <p>We will keep the information you filled in above confidential.</p>
        <button className="btn btn-primary text-uppercase" onClick={updateProfile(1)}>Change Password</button>
      </div>
    </div>
  </div>
</div>

</div>   
      </div>
    </section>
    
  ); 
}
