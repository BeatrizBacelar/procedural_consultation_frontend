import axios from 'axios';
import { useEffect, useState } from 'react';

import './styles/App.css';

import ContentMain from './components/ContentMain';
import ContentRight from './components/ContentRight';
import TopBar from './components/TopBar';

function App() {
  const [data, setData] = useState([])
  const [court, setCourt] = useState([])
  const [processNumber, setProcessNumber] = useState('')
  const [selectedCourt, setSelectedCourt] = useState('')
  
   function handleSearchProcess({processNumber, selectedCourt}) {
    axios.post('http://localhost:3001/get_process', {
        processNumber: processNumber,
        court: selectedCourt 
    })
    .then(res => setData(res.data))
  }
  
   function getCourts(setCourt) {
    axios.get('http://localhost:3001/get_courts')
    .then(res => setCourt(res.data))
  }

  useEffect(() => {
    getCourts(setCourt)
    handleSearchProcess({processNumber, selectedCourt})
  }, [])

    
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
        <ContentMain  data={data}/>
    </div>
  );
}

export default App;