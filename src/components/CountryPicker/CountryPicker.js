import React from 'react';
import styles from './CountryPicker.module.css'
import {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import * as API from '../../api';

const CountryPicker = ({handleCountryChange}) => {

  const [countries, setCountries] = useState([]);

  useEffect(()=>{
      let fetchCountriesData = async () =>{
        const countries = await API.fetchCountries();
        setCountries(countries);
      }
      fetchCountriesData();
  },[]);

  return (
    <FormControl className={styles.formControl}>
        <label>Select Country</label>
        <NativeSelect className={styles.dropDown} onChange={(e)=> handleCountryChange(e.target.value)}>
            <option key={"Global"} value=''>Global</option>
            {countries.length > 0 && countries.map(country => <option key={country.name} value={country.name.toUpperCase()}>{country.name}</option>)}
        </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
