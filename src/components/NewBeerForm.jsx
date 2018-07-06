import React from 'react';
import PropTypes from 'prop-types';


function NewBeerForm(props){
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation(
      {
        name: _name.value,
        brewer: _brewer.value,
        description: _description.value,
        abv: _abv.value, price: _price.value,
        remaining: _remaining.value
      });
  }
  return (
    // <div>
    //   <style global jsx>{`
    //     h3 {
    //       background-color: none;
    //     }
    //     body {
    //       background-image: url("../assets/images/EpicodusTapRoom.jpg");
    //
    //     }
    //   `}
    //   </style>
    // </div>

    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
        <textarea
          id='description'
          placeholder='Beer Description.'
          ref={(input) => {_description = input;}}/>
        <input
          type='text'
          id='abv'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          id='remaining'
          placeholder='Remaining'
          ref={(input) => {_remaining = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
