import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "./Data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div className="text-center">
      <div className="flex flex-col gap-3">
        {invoices.map((invoice) => (
          <Link
            className="bg-gray-200"
            to={`/invoices/${invoice.roll_number}`}
            key={invoice.roll_number}
          >
            {invoice.name}
          </Link>
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
}
