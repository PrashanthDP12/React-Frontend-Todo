import './App.css';
// import Counter from './components/counter/Counter';
// import LearningComponent from './components/learning-examples/LearningComponent';
import TodoApp from './components/todo/TodoApp';
import React from 'react';


function App() {
  return (
    <div className="App">
      {/* <Counter>Increment</Counter> */}
      <TodoApp> Todo Management Application</TodoApp>
    </div>
  );
}

export default App;
