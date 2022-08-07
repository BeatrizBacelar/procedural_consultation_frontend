import React, { Fragment, useEffect } from 'react';

function ContentMain ({data}) {

  return (
    <div className='contentMain'>
      {data?.map((el) => 
        <div key={el.CNJ} className='contentSelf'>
          <div className='topContentSelf'>
            <h1>Processo n. {el.CNJ} de {el.court_origin}</h1>
            <p>Distribuído em {el.start_date}</p>
          </div>
          <div className='contentProcessMoviments'>
            <p id='titleMoviments'>Movimentações</p>
            {el.transactions.map((trans) =>
                <Fragment key={trans.id}>
                  <p id='dateMoviments'>{trans.date}</p>
                  <p id='descriptionMoviments'>{trans.description}</p>
                </Fragment> 
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ContentMain;