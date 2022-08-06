import React from 'react';


function ButtonSearch({label, onClick}){

  return(
    <button 
      onClick={onClick}>
      {label}
    </button>
  )
}

export default ButtonSearch;