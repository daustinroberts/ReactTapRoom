import React from 'react';
import PropTypes from 'prop-types';

function BeerDetail(props) {
  return (
    <div>
      <hr/>
      <h2>{props.selectedBeer.name}</h2>
      <h2>{props.selectedBeer.brewer}</h2>
      <h2>{props.selectedBeer.description}</h2>
      <h2>{props.selectedBeer.abv}</h2>
      <h2>{props.selectedBeer.price}</h2>
      <h2>{props.selectedBeer.remaining}</h2>
    </div>
  );
}

BeerDetail.propTypes = {
  selectedBeer: PropTypes.object
};

export default BeerDetail;
