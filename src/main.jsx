import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios'
if(import.meta.env.MODE === 'development'){
  axios.defaults.baseURL = 'http://localhost:3001';
}
if(import.meta.env.MODE === 'production'){
  axios.defaults.baseURL = 'https://fake-api-lq8r.onrender.com/'
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
