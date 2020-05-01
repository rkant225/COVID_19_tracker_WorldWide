import React from 'react';
import styles from './App.module.css';
import logo from '../assets/logo.jpg';
import {Cards,Chart,CountryPicker} from './'
import * as API from '../api';


class App extends React.Component {
  
  state = {data : {}, selectedCountry : ""}

  async componentDidMount(){
    const fetchedData = await API.fetchData();
    this.setState({data : fetchedData})
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await API.fetchData(country);
    this.setState({data : fetchedData, selectedCountry : country})
  }

  render(){
    const {data, selectedCountry} = this.state;
    return (
      <div className={styles.container}>
        <img src={logo} alt="COVID-19 Logo" className={styles.logo}/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart countryWiseData={data} countryName={selectedCountry} />
      </div>
    );
  }
  
}

export default App;
