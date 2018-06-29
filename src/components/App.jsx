import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';
import NewBeerForm from './NewBeerForm';
import Error404 from './Error404';
import Epicodus from '../assets/images/Epicodus.jpg';

function App() {
  return (
    <div>
      <style global jsx>
        {`
      #basic {
        background-color: lightblue;
        font: Fantasy;
      }
      span {
        background-image: url("src/assets/images/EpicodusTapRoom.jpg");

      }
    `}
      </style>
      <div id="basic">
        <img src={Epicodus}/>
        <Header/>
        <Switch>
          <Route exact path='/' component={BeerList} />
          <Route path='/newbeer' component={NewBeerForm}/>
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
