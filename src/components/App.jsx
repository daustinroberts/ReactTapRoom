import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import NewBeerControl from './NewBeerControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import { v4 } from 'uuid';
import Epicodus from '../assets/images/Epicodus.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: {},
      selectedBeer: null
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    this.handleChangingSelectedBeer = this. handleChangingSelectedBeer.bind(this);
  }

  handleAddingNewBeerToList(newBeer){
    var newBeerId = v4();
    var newMasterBeerList = Object.assign({}, this.state.masterBeerList, {
      [newBeerId]: newBeer
    });

    this.setState({masterBeerList: newMasterBeerList});
  }

  handleChangingSelectedBeer(beerId){
    this.setState({selectedBeer: beerId});
  }
  render(){
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
            <Route
              exact path='/'
              render={()=><BeerList
                beerList={this.state.masterBeerList} />} />
            <Route
              path='/newbeer'
              render={()=><NewBeerControl
                onNewBeerCreation={this.handleAddingNewBeerToList} />} />
            <Route path='/admin'
              render={(props)=><Admin
                beerList={this.state.masterBeerList}
                currentRouterPath={props.location.pathname} onBeerSelection={this.handleChangingSelectedBeer} selectedBeer={this.state.selectedBeer} />} />
            <Route
              component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
