import React, { useState, useEffect } from "react";
import "./App.css";
import CustomerDetails from "./components/CustomerDetails";
import { Customer } from "./types/Customer";

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("/customers.json");
        const data: Customer[] = await response.json();
        setCustomers(data);
        setSelectedCustomer(data[0]);
      } catch (error) {
        console.error("Error loading customer data:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="App">
      <div className="customer-list">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className={`customer-card ${
              selectedCustomer?.id === customer.id ? "selected" : ""
            }`}
            onClick={() => setSelectedCustomer(customer)}
          >
            <h3>{customer.name}</h3>
            <p>{customer.title}</p>
          </div>
        ))}
      </div>
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
