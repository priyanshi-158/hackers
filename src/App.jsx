import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Rootlayout from './layout/Rootlayout';
import Landingpage from './pages/Landingpage';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Rootlayout />}>
          <Route path='/' element={<Landingpage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
