import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import { Search } from './screens/Search';
import { Video } from './screens/Video';

const theme = {
  primary: '#297ec9',
  secondary: '#0f171f',
  background: '#182737',
  text: 'white',
};

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/video/:id">
              <Video />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route>
              <Redirect to="/search" />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};
