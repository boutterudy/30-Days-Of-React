import React from "react";
import ReactDOM from "react-dom";
import Day03 from "./Pages/solutions/day-03";
import App from "./Components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const rootElement = document.getElementById("root");

const app = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="solutions/day-03" element={<Day03 />} />
        </Routes>
    </BrowserRouter>
);

// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
