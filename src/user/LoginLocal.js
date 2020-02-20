/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    maxWidth: 600,
    boxSizing: 'border-box',
    margin: '0 auto',
  },
  content: {
    padding: '1em 2em',
    margin: '2em 0',
  },
  heading: {
    textAlign: 'center',
  },
  button: {
    marginTop: '5%',
    marginLeft: '38%',
  },
});

function LoginLocal() {
  const s = useStyles();

  return (
    <div className={s.container}>
      <Card className={s.content}>
        <p className={s.heading}>Login</p>
        <form action="/login" method="post">
          <div>
            <label>Username </label>
            <TextField type="text" name="username" />
          </div>
          <div>
            <label>Password </label>
            <TextField type="password" name="password" />
          </div>
          <div>
            <Button className={s.button} color="inherit" type="submit">
              Log In / Sign Up
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default LoginLocal;
