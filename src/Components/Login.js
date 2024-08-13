import React, { useState } from 'react';

function Login() {
  const [formType, setFormType] = useState(null);

  const handleFormToggle = (type) => {
    setFormType(type);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <p>Please choose an option:</p>
      <button onClick={() => handleFormToggle('login')}>Login</button>
      <button onClick={() => handleFormToggle('signup')}>Sign Up</button>

      {formType === 'login' && (
        <form>
          <h2>Login</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      )}

      {formType === 'signup' && (
        <form>
          <h2>Sign Up</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default Login;
