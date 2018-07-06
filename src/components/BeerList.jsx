import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function BeerList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.beerList).map(function(beerId) {
        var beer =props.beerList[beerId];
        return <Beer
          name={beer.name}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          remaining={beer.remaining}
          currentRouterPath= {props.currentRouterPath}
          key={beerId}
          beerId={beerId}
          onBeerSelection={props.onBeerSelection}/>;
      })}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onBeerSelection: PropTypes.func
};

export default BeerList;
