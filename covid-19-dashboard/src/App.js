import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import './App.css';

import {
  fetch_all_data,
  fetch_all_countries,
  // TODO: fetch_history,
} from './api/index';

import Cards from './components/Cards';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';

const App = () => {
  const [data, setData] = useState({});
  const [allData, setAllData] = useState({});
  const [countries, setCountries] = useState('');
  const [country, setCountry] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const currentData = await fetch_all_data('All');
      setData(currentData);
    }
    getData();

    async function getAllData() {
      const currentAllData = await fetch_all_data();
      setAllData(currentAllData);
      setIsLoading(false);
    }
    getAllData();
  }, []);

  useEffect(() => {
    async function fetchCountries() {
      setCountries(await fetch_all_countries());
    }

    fetchCountries();
  }, [setCountries]);

  // const allCountriesCards = Object.keys(data).map((card, index) => (
  //   <Cards data={data[index]} key={index} />
  // ));

  const allCountriesList = Object.keys(countries).map((country, index) => (
    <option key={index} value={countries[index]}>
      {countries[index]}
    </option>
  ));

  const handleCountryChange = async (country) => {
    const countryData = await fetch_all_data(country);
    setData(countryData);
    setCountry(country);
    setIsLoading(false);
  };

  // TODO: fetch_history(country);
  // TODO: fetch_history();

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className='container'>
      <div className='dropdown'>
        <FormControl>
          <NativeSelect
            defaultValue=''
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value='All'>Global</option>
            {allCountriesList}
          </NativeSelect>
        </FormControl>
      </div>

      <div className='card'>
        <Cards data={data[0]} />
      </div>
      <div className='bar-pie-chart'>
        {country === 'All' ? <LineChart data={allData} continent /> : null}
        <br />
        <br />
        {country === 'All' ? <LineChart data={allData} /> : null}
        <br />
        <br />
        <PieChart data={data[0]} />
        <br />
        <br />
        <BarChart data={data[0]} />
      </div>
      {/* {allCountriesCards} */}
    </div>
  );
};

export default App;
