import React from 'react';
import AdminDashboard from './Components/AdminDashboard';
import LoginPage from './Components/LoginPage';
import EmployeeDashboard from './Components/EmployeeDashboard';
import ManagerDashboard from './Components/ManagerDashboard';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <h1 className='header'><center>ExpenseX - A Employee Expenditure Management Tool</center></h1>
      <LoginPage />
      <AdminDashboard />
      <EmployeeDashboard />
      <ManagerDashboard />
    </div>
  );
};

export default App;
