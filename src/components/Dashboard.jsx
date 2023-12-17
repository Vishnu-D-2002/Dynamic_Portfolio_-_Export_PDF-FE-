import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
      <div>
      Dashboard
      <Link to='/student'>Create Resume</Link>
      </div>
  );
}

export default Dashboard;
