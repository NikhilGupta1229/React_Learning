import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Components/Description';
import CurrentSituation from './Components/CurrentSituation';
import Name from './Components/Name';


function App() {
  const [count, setCount] = useState(0)

  return (
    <center class = "whole-container">
      <Name/>
      <Description/>
      <CurrentSituation/>
    </center>
  )
}

export default App
