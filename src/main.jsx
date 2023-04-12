import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Context from './context/ContextApi'
// import Context from "./context/Context.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
    {/* </Context> */}
  </React.StrictMode>,
)
