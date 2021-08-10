import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { UserContext } from './contexts/UserContext';

function App() {
  const [user, setUser] = useState(null);

  // Provide default value: 
  const userValue = { user, setUser };

  return (
    // Add context:
    <UserContext.Provider value={userValue}>
      <div className="App">
        <h1>Codelicious TODO</h1>

        {user && <>
          <p>Welcome, {user.name} <a href="#" onClick={() => { setUser(null) }}>Log out</a></p>
          <hr/>
          <TodoList />
        </>}
        {!user && <Login />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
