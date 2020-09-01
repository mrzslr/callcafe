import React from 'react';
import Router from 'containers/Router';
import jssStyle from 'utils/jss';
import Header from 'containers/Header';
import { JssProvider } from 'react-jss';
import { setupGlobalStyles } from 'utils/styles/globalStyles';

const sheets = setupGlobalStyles();

const App = () => (
  <>
    <JssProvider jss={jssStyle} registry={sheets}>
      <Header />
      <Router />
    </JssProvider>
  </>
);

export default App;
