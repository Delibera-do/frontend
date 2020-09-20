import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Login from './pages/Login';


const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={Login} />    

    <GlobalStyle />
  </Router>
);

export default App;
