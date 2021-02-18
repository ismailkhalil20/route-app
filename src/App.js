import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Dashboard from './components/Admin/Dashboard'
import Home from './components/Home'
import NotFound from './components/NotFound';



// TODO: OK a lot of work is to be done here.
// First of all import the correct components from the react-router-dom
// Second: Import the components from the components folder, note: for the admin only bring Dashboard.
// Third: Define the route for all the components. Accordingly:
// 1- /products should render Products, and the id param should render the ProductDetail
// 2- /dashboard should render admin Dashboard
// 3- /notfound should render the NotFound components.
// 4- / should render the Home components.
// 5- Any other route should go to the NotFound compoenent we have :)

const App = () => {
	return (
      <Router>
        <div className="App" >
          <NavBar />

          <Switch>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/products/:id">
              <ProductDetail />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:notfound">
              <NotFound />
            </Route>
          </Switch>
          
        </div>
      </Router>
	);
};

export default App;
