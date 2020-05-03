import React, { useState, useEffect } from 'react';

import { fetch_all_data } from './api/index';

import Cards from './components/Cards';

const App = () => {
  const [data, setData] = useState({});
  // const [country, setCountry] = useState('');

  useEffect(() => {
    async function getData() {
      const myData = await fetch_all_data();
      setData(myData);
    }
    getData();
  }, []);

  const allCountriesCards = Object.keys(data).map((item, index) => (
    <Cards data={data[index]} key={index} />
  ));

  return <>{allCountriesCards}</>;
};

export default App;
