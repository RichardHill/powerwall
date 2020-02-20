/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../images/powerwall.png';
import LoginLocal from '../user/LoginLocal';

const useStyles = makeStyles(theme => ({
  content: {
    ...theme.mixins.content,
  },
  imageLocation: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15%',
    width: '75%',
  },
}));

function Home() {
  const s = useStyles();

  return (
    <div className={s.content}>
      <img alt="PowerWall" src={Logo} className={s.imageLocation} />
      <LoginLocal />
    </div>
  );
}

export default Home;
