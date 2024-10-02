import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm'; // Assuming the file name is LoginForm.js
import Register from '../Components/Register'; // Assuming the file name is Register.js

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Toggle between Login and Register forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <div>
        {isLogin ? (
          <LoginForm toggleForm={toggleForm} />
        ) : (
          <Register toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default Auth;
