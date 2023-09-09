
//css import
import './index.css';

//component import
import App from './App.jsx'

//Liberary import
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import Store from './Redux/Store';


ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={Store}>
 <Router>
    <App />
    <Toaster/>
 </Router>
 </Provider>
)
