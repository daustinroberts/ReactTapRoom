import React from 'react';

function NewBeerForm(){
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

  );
}

export default NewBeerForm;
