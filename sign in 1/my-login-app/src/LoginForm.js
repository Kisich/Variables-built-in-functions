    import React, { useState } from 'react';

    function LoginForm() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Here, you would typically send username and password to an authentication API
        console.log('Username:', username);
        console.log('Password:', password);
        // Add your authentication logic here (e.g., fetch to a backend)
      };

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      );
    }

    export default LoginForm;