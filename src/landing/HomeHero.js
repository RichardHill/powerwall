/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.content,
    paddingTop: '2rem',
    paddingBottom: '3rem',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '3rem',
      paddingBottom: '4rem',
    },
  },
  title: {
    textAlign: 'center',
    paddingBottom: '1rem',
    fontWeight: 300,
    fontSize: '1.75rem',
    color: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
  },
  subTitle: {
    textAlign: 'center',
    paddingBottom: '1rem',
    color: theme.palette.common.white,
    fontWeight: 300,
    fontSize: '1.125rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
  },
  actions: {
    paddingTop: '1rem',
  },
  button: {
    boxShadow: 'none',
    backgroundColor: '#555',
    '&:hover': {
      backgroundColor: '#666',
    },
  },
}));

function HomeHero() {
  const s = useStyles();

  return (
    <div className={s.root}>
      <Typography className={s.title} variant="h3">
        Configure your Tesla PowerWall&trade;
      </Typography>
      <Typography className={s.subTitle} variant="h5">
        An easy to use portal for configuring your Tesla PowerWall
      </Typography>
    </div>
  );
}

export default HomeHero;
