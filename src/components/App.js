import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { ListPage } from '../pages/ListPage';
import { PeoplePage } from '../pages/PeoplePage';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            SWAPI
          </Typography>
        </Toolbar>
      </AppBar>

      <Router>
        <Switch>
          <Route path="/people/:id" render={() => <PeoplePage />} />
          <Route path="/" render={() => <ListPage />} exact />
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
}));

export default App;
