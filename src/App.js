import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from './store/reduxStore';
import RootContainer from './containers/rootContainer';

const history = createBrowserHistory();

class App extends Component {
	render() {
		return (
			// <Router history={history}>
  <BrowserRouter>
    <Provider store={store}>
      <RootContainer />
    </Provider>
  </BrowserRouter>
		);
	}
}

export default App;
