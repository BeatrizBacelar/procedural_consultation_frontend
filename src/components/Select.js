import React from 'react';


function Select ({
    selectedCourt, 
    court, 
    setSelectedCourt
}){

   return (
    <div className='select'>
        <select 
        value={selectedCourt}
        onChange={(event) => {
        setSelectedCourt(event.target.value)
        }} 
        name="select">
        <option value="" selected>Todos</option>
        {court.map((el) => <option value={el}>{el}</option>)}
        </select>
    </div>
   )
}

export default Select;