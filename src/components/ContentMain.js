import React, { useEffect } from 'react';

function ContentMain ({data}) {

  useEffect (() => {
     data.sort((a, b) => a.start_date > b.start_date)
  }, [data])
  return (
    <>
      {data?.map((el, index) => 
        <div key={el.CNJ} className='contentSelf'>
          <div className='topContentSelf'>
            <h1>Processo n. {el.CNJ} de {el.court_origin}</h1>
            <p>Distribuído em {el.start_date}</p>
          </div>
          <div className='contentProcessMoviments'>
            <p id='titleMoviments'>Movimentações</p>
            {el.transactions.map((trans) =>
                <div key={trans.id}>
                  <p>{trans.date}</p>
                  <p id='descriptionMoviments'>{trans.description}</p>
                </div> 
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ContentMain;