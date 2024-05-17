import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {datas} from './db'
import {sliderDb} from './db'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App datas ={datas} sliderDb={sliderDb} />
  </React.StrictMode>,
)
