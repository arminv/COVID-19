import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import {
  fetch_all_data,
  fetch_all_countries,
  // fetch_all_history,
} from './api/index';

import Cards from './components/Cards';
import Charts from './components/Charts';

const App = () => {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState('');
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const allData = await fetch_all_data();
      setData(allData);
      setIsLoading(false);
    }
    getData();
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

  // fetch_all_history(country);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <FormControl>
        <NativeSelect
          defaultValue=''
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value=''>Global</option>
          {allCountriesList}
        </NativeSelect>
      </FormControl>

      <Cards data={data[0]} />
      <Charts data={data[0]} />
      {/* {allCountriesCards} */}
    </>
  );
};

export default App;
