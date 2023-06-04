import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/AdminAPI/GetEmployee');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div className='Admin'>
      <h2>Admin Dashboard</h2>
      <h3>Employee List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.Emp_Id}>
              <td>{employee.Emp_Id}</td>
              <td>{employee.Name}</td>
              <td>{employee.Email}</td>
              {/* Render more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
