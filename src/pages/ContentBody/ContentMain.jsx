import React, { Fragment, useState } from 'react';

import './style.css'

import { sizeOfThings } from '../../utils/Content-utils';

import ContentRight from './ContentRight';

function ContentMain ({data}) {
  const [width, setWidth] = useState(window.innerWidth)
  console.log(width)

  window.addEventListener('resize', function(){
    sizeOfThings(setWidth);
  });

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
          {width > 768 && <ContentRight data={el}/>}
        </div>
      )}
    </div>
  )
}

export default ContentMain;