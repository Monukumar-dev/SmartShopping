import React, { useEffect, useState} from "react";
import MyAccountSidebar from "../../components/MyAccountSidebar";
import '../../../style/scss/myAccount.scss';
import Popup from "../../components/Popup";
import AddressForm from "../../components/AddressForm";
import { useDispatch, useSelector } from "react-redux";
import {startLoading,
        stopLoading,
        addAddress,
        deleteAddress,
        updateAddress,
        setError,
        selectAddresses,
        selectSelectedAddress,
        selectLoading,
        selectError } from "../../redux/slice/addressSlice";


export default function Address() {
    const dispatch = useDispatch();
    const addresses = useSelector(selectAddresses);
    console.log(addresses, "Address Fetch From Store");

    const [updateForm, setUpdateForm] = useState(null);

    const [show, setShow] = useState(false);
   // const [title, setTitle] = useState("");
   // const [content, setContent] = useState('just for testing');
    const [dialogClassName, setDialogClassName] = useState("modal-dialog-centered modal-lg");

    const handleAddAddress = (address) => {
      const uniqueID = Math.random().toString(36).substring(7);
      let finalAddress = {id:uniqueID,...address}
      dispatch(addAddress(finalAddress));
      setShow(false);
      console.log("Address Added to Store", finalAddress);
    };

    const handleUpdateAddress = (id) => {
     let SLindex = addresses.filter(address => address.id === id);
      console.log(SLindex, 'SLindex');
      if (SLindex !== null) {
        setUpdateForm(SLindex)
      }


      //updateForm
      //const uniqueID = Math.random().toString(36).substring(7);
      //let finalAddress = {id:uniqueID,...address}
      //dispatch(addAddress(finalAddress));

      setShow(true);

      console.log("Address Updated to Store", id);
    };
 
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
              
            {addresses && addresses.map((address, i) => (
              <li key={i} className="col-sm-6 ps-0 address-list-wrap address_card">
                <div className="c-address-item c-address-item-hover default-address">
                  <p className="name text-capitalize">
                    <strong>{address.f_name} {address.l_name} </strong> | {address.mobile}</p>
                  <p><strong>{address.typeAdd} Address:</strong></p>
                  <p className="text-capitalize" style={{lineHeight:1.4}}>
                    {`${address.address_add}, ${address.state}, ${address.city} - ${address.city} `}
                  </p>
                  <div className="operate">
                  {!address.makeDefault ? (
                      <a href="#" className="primary_address" onClick={(e) => console.log(e)}>
                        Make Default
                      </a>
                    ) : (
                      <a href="#">Default</a>
                    )}
                    <a className="" onClick={()=> dispatch(deleteAddress({ id: address.id }))}>Delete</a> 
                    <a href="#" className="editAddressMyAccount" onClick={()=> handleUpdateAddress(address.id)}>Edit</a>
                  </div>
                </div>
              </li>
            ))}
              
            </ul>
          </div>
        </div>
      </div>   
      </div>

      <Popup
        show={show}
        handleClose={() => setShow(false)}
        content={<AddressForm handleFormData={handleAddAddress} upDateFormData={updateForm} />}
        title={'Add address'}
        dialogClassName={dialogClassName}
      />


    </section>
    
  ); 
}
