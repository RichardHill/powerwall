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
  },
}));

function About() {
  const s = useStyles();

  return (
    <div className={s.root}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography paragraph>
        We are a software development consultancy that provides solutions to
        corporate clients. We have been developing software in many forms for
        over 30 years. The PowerWall Configuration utility is a tool written by
        us to help exploit features not available via the app. We have
        permission from Tesla to produce this software. You use this software at
        your own risk. We do not accept responsibility for any damage to your
        Tesla PowerWall through using this software.
      </Typography>
    </div>
  );
}

export default About;
