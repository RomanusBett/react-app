import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./components/login";
import Register from "./components/register";
import NotFound from './components/NotFound';
import {Routes,Route} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import Library from './components/library';
import HomePage from './components/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path='/library' element={<Library />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/login' element={<LoginPage />}/>
    <Route path='/' element={<HomePage />}></Route>
    <Route path="*" element={<NotFound />}/>
  </Routes>
  </BrowserRouter>,
);
reportWebVitals();
