import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
// import cx from 'classnames';

// import styles from './Cards.module.css';

const Cards = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  } else {
    const { country, cases, deaths, tests, day } = data;
    return (
      <>
        <Grid container spacing={3} justify='center'>
          <Grid item component={Card} xs={12} md={3}>
            <h2>{country}</h2>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Total Cases
              </Typography>
              <Typography variant='h5'>
                <CountUp
                  start={0}
                  end={cases.total}
                  duration={2.5}
                  separator=','
                ></CountUp>
              </Typography>
              <Typography color='textSecondary' gutterBottom>
                Total New Cases
              </Typography>
              <Typography variant='h5'>
                +
                <CountUp
                  start={0}
                  end={cases.new}
                  duration={2.5}
                  separator=','
                ></CountUp>
              </Typography>
              <Typography color='textSecondary' gutterBottom>
                Total Deaths
              </Typography>
              <Typography variant='h5'>
                <CountUp
                  start={0}
                  end={deaths.total}
                  duration={2.5}
                  separator=','
                ></CountUp>
              </Typography>

              {tests.total ? (
                <>
                  <Typography color='textSecondary' gutterBottom>
                    Total Tests
                  </Typography>
                  <Typography variant='h5'>
                    <CountUp
                      start={0}
                      end={tests.total}
                      duration={2.5}
                      separator=','
                    ></CountUp>
                  </Typography>
                </>
              ) : (
                <></>
              )}

              <Typography color='textSecondary'>
                {new Date(day).toDateString()}
              </Typography>
              <Typography variant='body2'>Total Number of Cases</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </>
    );
  }
};

export default Cards;
