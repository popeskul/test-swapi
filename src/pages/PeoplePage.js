import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClearIcon from '@material-ui/icons/Clear';
import CallApi from '../api';

export const PeoplePage = () => {
  const classes = useStyles();
  const params = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    CallApi.get(`/people/${params.id}`)
      .then((data) => {
        setCharacter(data);
      })
      .catch(() => setError(true));
  }, [params.id]);

  return (
    <div className={classes.content}>
      <Toolbar />
      {error ? (
        <>
          <ClearIcon color="error" fontSize="large" />{' '}
          <Typography variant="h3" color="error" gutterBottom>
            Error
          </Typography>
        </>
      ) : character && !error ? (
        <p>PeoplePage {params.id}</p>
      ) : (
        <CircularProgress color="primary" />
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
