import React from 'react';

import ButtonSearch from './ButtonSearch';
import Input from './Input';
import Select from './Select';


function TopBar ({
    processNumber,
    selectedCourt,
    court,
    handleSearchProcess,
    setProcessNumber,
    setSelectedCourt
}){

  return (
    <div className='topBar'>
        <h1 className='titleSearch'>Buscar</h1>
        <p>
          Selecione um tribunal para listar os processo ou buscar pelo número unificado
        </p>
      <div className='searchContainer'>
        <Select 
          selectedCourt={selectedCourt} 
          processNumber={processNumber}
          court={court} 
          setSelectedCourt={setSelectedCourt}
          handleSearchProcess={handleSearchProcess}/>
        <Input 
         processNumber={processNumber} 
         placeholder="Número do processo"
         onChange={(event) => setProcessNumber(event.target.value)}/>
        <ButtonSearch 
         label="Buscar" 
         onClick={() => handleSearchProcess({processNumber, selectedCourt})}/>
        </div>
    </div>
  )
}

export default TopBar;