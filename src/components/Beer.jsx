import React from 'react';
import PropTypes from 'prop-types';



function Beer(props){
  return (
    <div class="container">
      <style>{`
        #list {
          background-color: lightblue;
          font: Fantasy;
        }
        body {
          background-image: url("../assets/images/EpicodusTapRoom.jpg");

          }
      `}
      </style>
      <div id="list">
        <h3>{props.name}</h3>
        <h3>{props.brewer}</h3>
        <p>{props.description}</p>
        <h3>{props.abv}</h3>
        <h3>{props.price}</h3>
        <h3>{props.remaining}</h3>
        <hr/>
      </div>
      <div><span></span></div>

    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string
};

export default Beer;
