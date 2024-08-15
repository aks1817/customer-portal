import React from "react";
import { Customer } from "../types/Customer";

interface Props {
  customers: Customer[];
  onSelect: (customer: Customer) => void;
  selectedCustomer: Customer | null;
}

const CustomerList: React.FC<Props> = ({
  customers,
  onSelect,
  selectedCustomer,
}) => {
  return (
    <div>
      {customers.map((customer) => (
        <div
          key={customer.id}
          className={`customer-card ${
            selectedCustomer?.id === customer.id ? "selected" : ""
          }`}
          onClick={() => onSelect(customer)}
        >
          <h3>{customer.name}</h3>
          <p>{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
