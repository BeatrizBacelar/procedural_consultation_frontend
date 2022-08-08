import React, { Fragment} from 'react';

import './style.css'

function ContentRight ({data}) {
const typePart = ['Exequente', 'Apelante']

  return (
    <div className='contentRight'>
        <h3>Detalhes do processo</h3>
        <div key={data.CNJ} className='contentDetailsProcess'>
          {data.process_details.map((detail) => 
          <p className='detailProcess'>{detail}</p>
          )}
        </div>
        <h3>Partes envolvidas</h3>
        <div key={data.CNJ} className='contentPartEnvolved'>
          <p className='nameEnvolved'>{data.part_names.author}</p>
          <p className='partEnvolved'>Parte envolvida &#186; {typePart[0]}</p>
          <p className='nameEnvolved'>{data.part_names.defendant}</p>
          <p className='partEnvolved'>Parte envolvida &#186; {typePart[1]}</p>
          {data.part_names.lawyers.map((law, index) => 
            <Fragment key={index}>
              <p className='nameEnvolved'>{law.name}</p>
              <p className='partEnvolved'>Advogado Associado {law.register ? ` - OAB ${law.register}` : ''}</p>
            </Fragment>
          )}    
        </div>
    </div>
  )
}

export default ContentRight;