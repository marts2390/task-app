import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import TaskCardApp from './components/TaskCardApp';
import './App.css';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <TaskCardApp />
        </Provider>
      </header>
    </div>
  );
}

export default App;
