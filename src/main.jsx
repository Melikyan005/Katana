import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {datas} from './db'
import {sliderDb} from './db'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App datas ={datas} sliderDb={sliderDb} />
  </BrowserRouter>,
)
