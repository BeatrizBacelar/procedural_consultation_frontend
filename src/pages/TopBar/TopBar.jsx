import React from 'react';

import './style.css';

import ButtonSearch from '../../components/ButtonSearch';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TopBar ({
    processNumber,
    selectedCourt,
    court,
    handleSearchProcess,
    setProcessNumber,
    setSelectedCourt
}){


  return (
    <div className='fullTopBar'>
      <div className='topBar'>
        <div className='textTopBar'>
          <h1 className='titleSearch'>Buscar</h1>
          <p>
            Selecione um tribunal para listar os processos ou buscar pelo número unificado
          </p>
        </div>
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
    </div>
  )
}

export default TopBar;