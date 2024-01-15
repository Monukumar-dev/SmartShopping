import React, { useEffect, useState} from "react";
import MyAccountSidebar from "../../components/MyAccountSidebar";
import '../../../style/scss/myAccount.scss';
import Popup from "../../components/Popup";
import AddressForm from "../../components/AddressForm";


export default function Address() {

   // const addAddress = 
    const [show, setShow] = useState(false);
   // const [title, setTitle] = useState("");
   // const [content, setContent] = useState('just for testing');
    const [dialogClassName, setDialogClassName] = useState("modal-dialog-centered modal-lg");



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
        <div className="col-xs-9 col-md-9 col-lg-9 c-addressbook">
          <h3>My Address Book</h3>
          <div className="submit-btn j-normal-btn mt-4 mb-3">
            <button className="btn btn-primary me-1" onClick={()=> setShow(true)}> +Add New Address</button>
          </div>
          <div className="address-list-warp">
            <ul className="address-list row ul-style-none pl-14">
              <li className="col-sm-6 ps-0 address-list-wrap address_card">
                <div className="c-address-item c-address-item-hover default-address">
                  <p className="name">
                    <input type="hidden" name="id" id="id1" defaultValue={387} />
                    <strong>Monu Kumar Gautam Kumar </strong> | IN 09768612445</p>
                  <p>
                    <br />
                    <strong>Address:</strong>
                    <br />Worli
                    Worli
                    jaunpur ,  -400603</p>
                  <div className="operate">
                    <a href="#" className="primary_address">Make Default</a>
                    <a href="#">Delete</a> 
                    <a href="#" className="editAddressMyAccount">Edit</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>   
      </div>

      <Popup
        show={show}
        handleClose={() => setShow(false)}
        content={<AddressForm />}
        title={'Add address'}
        dialogClassName={dialogClassName}
      />


    </section>
    
  ); 
}
