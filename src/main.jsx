import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {data} from './db'
import {sliderDb} from './db'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data ={data} sliderDb={sliderDb} />
  </React.StrictMode>,
)
