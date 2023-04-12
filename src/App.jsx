import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useState } from "react";
import './App.css'
import Rootlayout from './layout/Rootlayout';
import Landingpage from './pages/Landingpage';
import { subjectsContext } from './context/ContextApi'

function App() {
  const { subjects, setSubjects } = useContext(subjectsContext);

  // console.log(subjects.maths)

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
