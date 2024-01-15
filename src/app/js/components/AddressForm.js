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
    <div className='row p-5'>
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
      
      <p>You selected: {selectedCountry}, {selectedState}, {selectedCity}</p>
    </div>
  );
}

export default AddressForm;
