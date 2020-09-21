import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Login from './pages/Login';
import Assembleia from './pages/Assembleia';


const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={Login} />    
    <Route path="/assembleia" component={Assembleia} />    

    <GlobalStyle />
  </Router>
);

export default App;
