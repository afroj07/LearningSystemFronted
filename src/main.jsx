
//css import
import './index.css';

//component import
import App from './App.jsx'

//Liberary import
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
    <Toaster/>
 </Router>
)
