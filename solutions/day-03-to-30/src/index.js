import React from 'react';
import ReactDOM from 'react-dom';
import App from './Layouts/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DaySolution from './Layouts/DaySolution';
import 'remixicon/fonts/remixicon.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
const rootElement = document.getElementById('root');

const app = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='solutions/day-:number' element={<DaySolution />} />
    </Routes>
  </BrowserRouter>
);

// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
