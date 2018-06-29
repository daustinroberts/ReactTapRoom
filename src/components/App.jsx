import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';
import NewBeerForm from './NewBeerForm';


function App() {
  return (
    <div>

      <Header/>
      <Switch>
        <Route exact path='/' component={BeerList} />
        <Route path='/newbeer' component={NewBeerForm}/>
      </Switch>

    </div>
  );
}

export default App;
