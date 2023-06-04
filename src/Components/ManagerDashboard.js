import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Manager = () => {
  const [pendingExpenses, setPendingExpenses] = useState([]);

  useEffect(() => {
    fetchPendingExpenses();
  }, []);

  const fetchPendingExpenses = async () => {
    try {
      const response = await axios.get('/api/ManagerAPI/GetPendingExpenses');
      setPendingExpenses(response.data);
    } catch (error) {
      console.error('Error fetching pending expenses:', error);
    }
  };

  const rejectExpense = async (id) => {
    try {
      await axios.put(`/api/ManagerAPI/RejectExpense/${id}`);
      fetchPendingExpenses();
    } catch (error) {
      console.error('Error rejecting expense:', error);
    }
  };

  const acceptExpense = async (id) => {
    try {
      await axios.put(`/api/ManagerAPI/AcceptExpense/${id}`);
      fetchPendingExpenses();
    } catch (error) {
      console.error('Error accepting expense:', error);
    }
  };

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <h3>Pending Expenses</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
              <td>{expense.status}</td>
              <td>
                <button onClick={() => rejectExpense(expense.id)}>Reject</button>
                <button onClick={() => acceptExpense(expense.id)}>Accept</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manager;
