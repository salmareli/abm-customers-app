import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

import './App.css';


class App extends Component {
  renderHome = () => <h1>Home</h1>;
  renderCustomerContainer = () => <h1>Customer Container</h1>;
  renderCustomerListContainer = () => <h1>Customer List Container</h1>;
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;
  
  render() {
    return (
            <Router>
              <div>
                  <Route exact path="/" component={this.renderHome}></Route>
                  <Route exact path="/customer" component={this.renderCustomerContainer}></Route>
                  <Switch>
                    <Route exact path="/customer/new" component={this.renderCustomerListContainer}></Route>
                    <Route exact path="/customer/:dpi" component={this.renderCustomerNewContainer}></Route>
                  </Switch>
              </div>
            </Router>
    );
  }
}

App.propTypes = {

};

export default App;
