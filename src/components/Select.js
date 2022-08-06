import React from 'react';


function Select ({
    selectedCourt, 
    processNumber, 
    court, 
    setSelectedCourt, 
    handleSearchProcess
}){

   return (
    <div className='select'>
        <select 
        value={selectedCourt}
        onChange={(event) => {
        console.log(event.target.value)
        setSelectedCourt(event.target.value)
        handleSearchProcess({processNumber, selectedCourt: event.target.value})
        }} 
        name="select">
        <option value="" selected>Todos</option>
        {court.map((el) => <option value={el}>{el}</option>)}
        </select>
    </div>
   )
}

export default Select;