import { useEffect, useState } from 'react';

import './styles/App.css';

import ContentMain from './pages/ContentBody/ContentMain';
import TopBar from './pages/TopBar/TopBar';
import api from './services/api';

function App() {
  const [data, setData] = useState([])
  const [court, setCourt] = useState([])
  const [processNumber, setProcessNumber] = useState('')
  const [selectedCourt, setSelectedCourt] = useState('')
  const [notFound, setNotFound] = useState(false)
  
   function handleSearchProcess({processNumber, selectedCourt}) {
    api.post('http://localhost:3001/get_process', {
        processNumber: processNumber,
        court: selectedCourt 
    })
    .then(res => setData(res.data))
  }
  
   function getCourts(setCourt) {
    api.get('http://localhost:3001/get_courts')
    .then(res => setCourt(res.data))
  }

  function pageNotFound () {
    if ((processNumber || selectedCourt) && !data?.length){
      setNotFound(true)
    } else {
      setNotFound(false)
    }
  }

  useEffect(() => {
    getCourts(setCourt)
    handleSearchProcess({processNumber, selectedCourt})
  }, [])

  useEffect (() => {
    pageNotFound()
  }, [processNumber, selectedCourt, data.length])

    
  return (
    <div className="App">
      <TopBar
       processNumber={processNumber}
       selectedCourt={selectedCourt}
       court={court}
       handleSearchProcess={handleSearchProcess}
       setProcessNumber={setProcessNumber}
       setSelectedCourt={setSelectedCourt}
      />
      {notFound 
        ? 
          <h3>Processo não encontrado</h3>
        :
       <ContentMain  data={data}/>}
    </div>
  );
}

export default App;