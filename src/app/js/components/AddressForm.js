import React, { useState, useEffect } from 'react';

const AddressForm = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  var headers = new Headers();
  headers.append("X-CSCAPI-KEY", "dmZ2MjZCRHl6dm5WdktJN3BveE14eWZ1QjIzdlZrUm53TU80aXpnNw==");
  
  var requestOptions = {
     method: 'GET',
     headers: headers,
     redirect: 'follow'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
        const result = await response.json();
        //console.log("fetchData", result);
        setCountries(result);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (selectedCountry) {
        try {
          const response = await fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`, requestOptions);
          const result = await response.json();
          setStates(result);
        } catch (error) {
          console.log('error', error);
        }
      }
    };

    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchCities = async () => {
      if (selectedState) {
        try {
          const response = await fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${selectedState}/cities`, requestOptions);
          const result = await response.json();
          setCities(result);
        } catch (error) {
          console.log('error', error);
        }
      }
    };

    fetchCities();
  }, [selectedCountry, selectedState]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState('');
    setSelectedCity('');
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <>
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
          <div className='mb-3 row'>
            <div className='col-md-4'>
              <label htmlFor="countryDropdown">Select a Country:</label>
              <select className='form-select' id="countryDropdown" value={selectedCountry} onChange={handleCountryChange}>
                <option value="" disabled>Select a country</option>
                {countries.map(country => (
                  <option key={country.iso2} value={country.iso2}>{country.name}</option>
                ))}
              </select>
            </div>     
            <div className='col-md-4'>
              <label htmlFor="stateDropdown">Select a State:</label>
              <select className='form-select' id="stateDropdown" value={selectedState} onChange={handleStateChange}>
                <option value="" disabled>Select a state</option>
                {states.map(state => (
                  <option key={state.iso2} value={state.iso2}>{state.name}</option>
                ))}
              </select>
            </div>
            <div className='col-md-4'>
              <label htmlFor="cityDropdown">Select a City:</label>
              <select className='form-select' id="cityDropdown" value={selectedCity} onChange={handleCityChange}>
                <option value="" disabled>Select a city</option>
                {cities.map(city => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </select>
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
    </>
  );
}

export default AddressForm;
