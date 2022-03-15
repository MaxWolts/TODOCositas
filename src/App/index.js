import React from 'react';
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext'
// import { Children } from 'react/cjs/react.production.min';
// import { TodoCounter } from '../TodoCounter';
// import { TodoSearch } from '../TodoSearch';
// import { TodoItem } from '../TodoItem';





function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;