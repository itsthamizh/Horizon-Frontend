import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Register from './components/Users/Register';
import Login from './components/Login/Login';
import AddCases from './components/Users/AddCases';

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className= "main">
      {/* <HeaderComponent/> */}
          <Router>
              <Switch>
                <Route exact path= "/register" component={Register} />
                <Route exact path= "/login" component={Login} />
                <Route exact path= "/cases" component={AddCases}/>
              </Switch>
          </Router>
      {/* <FooterComponent/> */}
    </div>
  );
}

export default App;