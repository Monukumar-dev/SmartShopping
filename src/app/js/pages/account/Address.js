import React, { useEffect, useState} from "react";
import MyAccountSidebar from "../../components/MyAccountSidebar";
import '../../../style/scss/myAccount.scss';
import Popup from "../../components/Popup";
import  countryDatas from '../../india.json';


export default function Address() {

 // Country Data
  const [countryData, setCountryData] = useState(countryDatas);
  const [states, setStates] = useState(null);
  const [countrys, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  //console.log(Object.entries(countryData), 'Original data');
  console.log(countrys, 'Country');
  console.log(states, 'states');


   // const addAddress = 
    const [show, setShow] = useState(false);
   // const [title, setTitle] = useState("");
   // const [content, setContent] = useState('just for testing');
    const [dialogClassName, setDialogClassName] = useState("modal-dialog-centered modal-lg");



  const updateProfile = (id) => {
    //dispatch(userLogin(data))
    //console.log(id);

  }

 function renderCountry() {
    return (
      <div>
      {countryData.countries.map((country) => (
        <div key={country.name}>
          {setCountry(country.name)}
          {country.states.map((state) => (
            <div key={state.name}>
              {setStates(state.name)}
              <ul>
                {state.cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
   )
 }

 useEffect(()=>{
  renderCountry();
 },[])
  function addAddressForm() {
        return (
          <form action="#" id="frmShippingAddress" method="post">
          <div className="mb-3 row">
            <div className="form-group col-lg-6">
              <label className="font-weight-bold text-dark text-2">First Name</label>
               <input type ="text"className="form-control"id="first_name"name="first_name"/>
            </div>
            <div className="form-group col-lg-6">
              <label className="font-weight-bold text-dark text-2">Last Name</label>
              <input type="text" className="form-control" id="last_name" />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="form-group col-lg-12">
              <label className="font-weight-bold text-dark text-2">Phone Number</label>
              <div className="input-group">
                <div className="input-group-addon">
                  <span className="input-group-text" id="basic-addon1">IN +91</span>
                </div>
                 <input ty pe= "text"className="form-control"placeholder="*Phone Number"id="phone_number"/>
              </div>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="form-group col-lg-4">
              <label className="font-weight-bold text-dark text-2">State</label>
              <select className="form-select" name="state">
                <option> Please select a region. </option>
                {countryData.countries.map((country, i) => (
                  <option key={i} value={country.name}>{country.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-lg-4">
              <label className="font-weight-bold text-dark text-2">City</label>
                <select className="form-select ct pl-0" name="city">
                  <option value=""></option>
                </select>
            </div>
            <div className="form-group col-lg-4">
              <label className="font-weight-bold text-dark text-2">Post/Zipcode</label>
              <input type="*Post/Zip Code" className="form-control" id="pincode" />
            </div>
          </div>
          {/*end form Row*/} 
          <div className="mb-3 row">
            <div className="form-group col-lg-12">
              <label className="font-weight-bold text-dark text-2">
                Address (House No, Building, Street, Area) *
              </label>
              <textarea className="form-control" name="address_add" id="address_add" spellCheck="false" />
              <small>Please enter your detailed Apartment to make it easier for us to serve!</small>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="form-group col-lg-12">
              <label className="font-weight-bold text-dark text-2">Landmark/Locality(Optional)</label>
              <input type="text" className="form-control" id="landmark" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-9">
              <div className="address-type">
                <span className="bold me-2">Type of Address</span>
                <div className="form-check form-check-inline me-2">
                  <input type="radio" id="FoterHOME" name="typeadd" className="form-check-input" defaultValue="home" />
                  <label className="custom-control-label" htmlFor="FoterHOME">HOME</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" id="FoterOFFICE" name="typeadd" className="form-check-input" defaultValue="office" />
                  <label className="custom-control-label" htmlFor="FoterOFFICE">OFFICE</label>
                </div>
              </div>
              {/*address-type*/}
            </div>
            <div className="form-group col-lg-3">
              <div className="custom-control custom-checkbox pull-right">
                <input type="checkbox" className="custom-control-input" id="foteraddressdefault" name="makedefault" />
                <label className="custom-control-label" htmlFor="foteraddressdefault">Make Default</label>
              </div>
            </div>
          </div>
          <div className="justify-content-center my-4 row text-center">
            <div className="form-group col-sm-12">
               <button type="button" className="btn btn-primary me-2" data-loading-text="Loading...">SAVE</button>
                 <button type="button" className="btn btn-ou tline-primary text-uppercase ms-2">Update</button>
            </div>
          </div>
        </form>        
        )
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
        content={addAddressForm()}
        title={'Add address'}
        dialogClassName={dialogClassName}
      />


    </section>
    
  ); 
}
