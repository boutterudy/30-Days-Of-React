import React from "react";
import ReactDOM from "react-dom";
import Day03 from "./Pages/solutions/day-03";
import Day04 from "./Pages/solutions/day-04";
import App from "./Layouts/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Day05 from "./Pages/solutions/day-05";
import Day06 from "./Pages/solutions/day-06";
import Day07 from "./Pages/solutions/day-07";
import Day08 from "./Pages/solutions/day-08";
const rootElement = document.getElementById("root");

const app = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="solutions/day-03" element={<Day03 />} />
            <Route path="solutions/day-04" element={<Day04 />} />
            <Route path="solutions/day-05" element={<Day05 />} />
            <Route path="solutions/day-06" element={<Day06 />} />
            <Route path="solutions/day-07" element={<Day07 />} />
            <Route path="solutions/day-08" element={<Day08 />} />
        </Routes>
    </BrowserRouter>
);

// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
