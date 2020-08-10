import React from "react";
import Router from "containers/Router";
import jssStyle from 'utils/jss'
import { JssProvider } from "react-jss";
import {setupGlobalStyles} from 'utils/styles/globalStyles';

const sheets = setupGlobalStyles();

const App = () => {
  return (
    <>
     <JssProvider jss={jssStyle} registry={sheets}>
      <h1>Header</h1>
      <Router />
      <h1>Footer</h1>
      </JssProvider>
    </>
  );
};

export default App;
