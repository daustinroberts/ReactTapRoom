import React from 'react';
import PropTypes from 'prop-types';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';

function Admin(props) {
  let optionalSelectedBeerContent = null;
  if (props.selectedBeer != null){
    optionalSelectedBeerContent = <BeerDetail selectedBeer={props.beerList[props.selectedBeer]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedBeerContent}
      <BeerList
        BeerList={props.beerList}
        currentRouterPath={props.currentRouterPath}
        onBeerSelection={props.onBeerSelection}/>
    </div>
  );
}

Admin.propTypes = {
  beerList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onBeerSelection: PropTypes.func.isRequired,
  selectedBeer: PropTypes.string
};

export default Admin;
