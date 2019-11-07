import React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <>
      <TodoInsert />
      <TodoList />
    </>
  );
};

export default App;
