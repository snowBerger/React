import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography'
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <Typography component="h1" variant="h2">Todos</Typography>
      <Todo/>
    </div>
  );
}

export default App;
