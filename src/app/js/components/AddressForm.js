import React, { useState, useEffect, useRef } from 'react';

const AddressForm = ({handleFormData}) => {

  const defaultAdd = useRef()

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [formData, setFormData] = useState({
                                            f_name: '',
                                            l_name: '',
                                            mobile: '', 
                                            country: selectedCountry, 
                                            state: selectedState, 
                                            city: selectedCity,
                                            address_add: '',
                                            landmark: '',
                                            typeAdd: '',
                                            makeDefault: false,
                                          });

  //console.log(formData.makeDefault, isCheck);

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
    setFormData({...formData, [event.target.name]: event.target.value})
    setSelectedState('');
    setSelectedCity('');
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    //console.log(formData);
    handleFormData(formData)
  }
  const handleUpdateAddress = (e) => {
    e.preventDefault();
    console.log("handleUpdateAddress");
  }

  const onChange = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <>
    <form id="frmShippingAddress" onSubmit={handleSaveAddress}>
          <div className="mb-3 row">
            <div className="form-group col-md-6">
              <label className="font-weight-bold text-dark text-2">First Name</label>
               <input type="text" className="form-control" name="f_name" onChange={onChange} value={formData.f_name}/>
            </div>
            <div className="form-group col-md-6">
              <label className="font-weight-bold text-dark text-2">Last Name</label>
              <input type="text" className="form-control" name="l_name" onChange={onChange} value={formData.l_name} />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="form-group col-lg-12">
              <label className="font-weight-bold text-dark text-2">Phone Number</label>
              <div className="input-group">
                <div className="input-group-addon">
                  <span className="input-group-text" id="basic-addon1">IN +91</span>
                </div>
                 <input type="text" name='mobile' className="form-control" placeholder="*Phone Number" onChange={onChange} value={formData.mobile}/>
              </div>
            </div>
          </div>
          <div className='mb-3 row'>
            <div className='col-md-4'>
              <label htmlFor="countryDropdown">Select a Country:</label>
              <select className='form-select' name='country' id="countryDropdown" value={selectedCountry} onChange={handleCountryChange}>
                <option value="" disabled>Select a country</option>
                {countries.map(country => (
                  <option key={country.iso2} value={country.iso2}>{country.name}</option>
                ))}
              </select>
            </div>     
            <div className='col-md-4'>
              <label htmlFor="stateDropdown">Select a State:</label>
              <select className='form-select' name='state' id="stateDropdown" value={selectedState} onChange={handleStateChange}>
                <option value="" disabled>Select a state</option>
                {states.map(state => (
                  <option key={state.iso2} value={state.iso2}>{state.name}</option>
                ))}
              </select>
            </div>
            <div className='col-md-4'>
              <label htmlFor="cityDropdown">Select a City:</label>
              <select className='form-select' name='city' id="cityDropdown" value={selectedCity} onChange={handleCityChange}>
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
              <textarea className="form-control" name="address_add" spellCheck="false" onChange={onChange} value={formData.address_add} />
              {/* <small>Please enter your detailed Apartment to make it easier for us to serve!</small> */}
            </div>
          </div>
          <div className="mb-3 row">
            <div className="form-group col-lg-12">
              <label className="font-weight-bold text-dark text-2">Landmark/Locality(Optional)</label>
              <input type="text" name='landmark' className="form-control" onChange={onChange} value={formData.landmark} />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-9">
              <div className="address-type">
                <span className="bold me-2">Type of Address</span>
                <div className="form-check form-check-inline me-2">
                  <input type="radio" id="HOME" name="typeAdd" className="form-check-input" value='Home' onChange={onChange}/>
                  <label className="custom-control-label" htmlFor="HOME">HOME</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" id="OFFICE" name="typeAdd" className="form-check-input" value="Office" onChange={onChange}/>
                  <label className="custom-control-label" htmlFor="OFFICE">OFFICE</label>
                </div>
              </div>
              {/*address-type*/}
            </div>
            <div className="form-group col-lg-3">
              <div className="custom-control custom-checkbox pull-right">
                <input ref={defaultAdd} id='foteraddressdefault' type="checkbox" className="custom-control-input" name="makedefault" onChange={() => setFormData({...formData, makeDefault: defaultAdd.current.checked})} />
                <label className="custom-control-label" htmlFor="foteraddressdefault">Make Default</label>
              </div>
            </div>
          </div>
          <div className="justify-content-center my-4 row text-center">
            <div className="form-group col-sm-12">
               <button type="submit" className="btn btn-primary me-2">SAVE</button>
               <button type="button" className="btn btn-ou tline-primary text-uppercase ms-2">Update</button>
            </div>
          </div>
        </form> 
    </>
  );
}

export default AddressForm;
