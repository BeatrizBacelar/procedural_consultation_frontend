import React, { Fragment} from 'react';


function ContentRight ({data}) {
const typePart = ['Exequente', 'Apelante']

  return (
    <div className='contentRight'>
      {data.map((el, index) => 
      <Fragment key='index'>
        <h3>Detalhes do processo</h3>
        <p className='partEnvolved'>{el.CNJ}</p>
        <div key={index} className='contentDetailsProcess'>
          {el.process_details.map((detail) => 
          <p className='detailProcess'>{detail}</p>
          )}
        </div>
        <h3>Partes envolvidas</h3>
        <div key={index} className='contentPartEnvolved'>
          <p className='nameEnvolved'>{el.part_names.author}</p>
          <p className='partEnvolved'>Parte envolvida &#186; {typePart[0]}</p>
          <p className='nameEnvolved'>{el.part_names.defendant}</p>
          <p className='partEnvolved'>Parte envolvida &#186; {typePart[1]}</p>
          {el.part_names.lawyers.map((law, index) => 
            <Fragment key={index}>
              <p className='nameEnvolved'>{law.name}</p>
              <p className='partEnvolved'>Advogado Associado {law.register ? ` - OAB ${law.register}` : ''}</p>
            </Fragment>
          )}    
        </div>
      </Fragment>
      )}
    </div>
  )
}

export default ContentRight;