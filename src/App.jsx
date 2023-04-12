import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useState } from "react";
import './App.css'
import Rootlayout from './layout/Rootlayout';
import Landingpage from './pages/Landingpage';
// import SubjectPage from './pages/SubjectPage';
import { subjectsContext } from './context/ContextApi'
import SubjectPage from './pages/subjectPage';

function App() {
  const { subjects, setSubjects } = useContext(subjectsContext);

  // console.log(subjects.maths)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Rootlayout />}>
          <Route path='/' element={<Landingpage />}></Route>
          <Route path='/subject/:subjectId' element={<SubjectPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
