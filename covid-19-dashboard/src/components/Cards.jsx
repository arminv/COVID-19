import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  } else {
    // console.log(data);
    return (
      <>
        <h3>{data.country}</h3>
        <p>Total Cases : {data.cases.total}</p>
        <p>Total New Cases : {data.cases.new}</p>
        <p>Total Deaths : {data.deaths.total}</p>
        <p>Total Tests : {data.tests.total}</p>
        <p>Date Updated : {data.day}</p>

        <Grid container spacing={3} justify='center'>
          <Grid item component={Card} xs={12} md={3}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Cases
              </Typography>
              <Typography variant='h5'>
                <CountUp
                  start={0}
                  end={data.cases.total}
                  duration={2.5}
                  separator=','
                ></CountUp>
              </Typography>
              <Typography color='textSecondary'>
                {new Date(data.day).toDateString()}
              </Typography>
              <Typography variant='body2'>Total Number of Cases</Typography>
            </CardContent>
          </Grid>
        </Grid>
        <hr />
      </>
    );
  }
};

export default Cards;
