// src/App.js
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';  // Import auth from Firebase configuration

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);  // To track logged-in user

  // Handle login button click
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logout successful');
    } catch (err) {
      console.error(err.message);
    }
  };

  // Listen for changes in the authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // Set user if logged in, otherwise null
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ backgroundColor: 'green' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h2>Knowledge Scientist Login</h2>
        {!user ? (
          // Show login form if no user is logged in
          <form onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        ) : (
          // Show logout button if user is logged in
          <div>
            <p>Welcome, {user.email}</p>
            <button onClick={handleLogout}>Logout</button>

            {/* Conditionally render the secret button */}
            <button style={{ marginTop: '20px', backgroundColor: 'yellow' }}>
              Secret Button
            </button>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default App;
