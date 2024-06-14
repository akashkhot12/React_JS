import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./Component/Invoices.jsx";
import Expenses from "./Component/Expenses.jsx";
import Bills from "./Component/Bills.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/invoices" element={<Invoices />}> <Route path=":invoiceId" element={<Bills/>}></Route></Route>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="*" element={<div>There nothing will be here!..</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
