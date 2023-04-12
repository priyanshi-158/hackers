import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css'
import Rootlayout from './layout/Rootlayout';

function App() {
 

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Rootlayout/>}>

      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
