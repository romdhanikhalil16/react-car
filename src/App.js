import React from 'react';
import NavBar from './components/NabBar'
import NabBar from './components/NabBar'
import AddCar from './components/AddCar'
import Modification from './components/Modification'
import Home from './components/Home'
import {Route , Switch ,  BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


function App() {
  return (
    <Provider store={store} >
  <Router>
   < NabBar/>
  <Switch>
     <Route component={AddCar} path='/AddCar' />
     <Route component={Modification} path='/Modification'/>
     <Route component={Home} path='/Home'/>
     <Route component={SignUp} path='/SignUp' />
     <Route component={SignIn} path='/SignIn' />
  </Switch>
  </Router>
</Provider>
  );
}

export default App;
