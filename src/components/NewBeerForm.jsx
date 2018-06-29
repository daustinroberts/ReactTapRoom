import React from 'react';
// import PropTypes from 'prop-types';

function NewBeerForm(){
  return (
    // <style global jsx> {`
    //   #beergif {
    //     background-color: none;
    //     background-image: url("src/assets/images/EpicodusTapRoom.jpg");
    //   };
    // `}
    // </style>
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'/>
        <textarea
          id='description'
          placeholder='Beer Description.'/>
        <input
          type='text'
          id='abv'
          placeholder='Price'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
    // <div class="beergif">
    //
    // </div>
  );
}

export default NewBeerForm;
