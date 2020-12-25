import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.scss';
import Navbar from '../Navbar';
import Inventory from '../Inventory';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Inventory } />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
