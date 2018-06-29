import React from 'react';

function NewBeerForm(){
  return (
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
  );
}

export default NewBeerForm;
