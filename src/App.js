import axios from 'axios';
import { useEffect, useState } from 'react';

import './styles/App.css';

import TopBar from './components/TopBar';
import ContentMain from './components/ContentMain';

function getProcessConsultation() {
  axios.get('http://localhost:3001/get_procedural_consultation')
  .then(res => res.data)
}


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

  function getCourts() {
    axios.get('http://localhost:3001/get_courts')
    .then(res => setCourt(res.data))
  }

  function handleSearchProcessByCourt(court) {
    axios.post(`http://localhost:3001/get_process_by_court?court=${court}`)
    .then(res => setData(res.data))
  }

  
  useEffect(() => {
    getCourts()
    handleSearchProcess({processNumber, selectedCourt})
  }, [])

  console.log(processNumber)
    
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
      <ContentMain data={data}/>
    </div>
  );
}

export default App;