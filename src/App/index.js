import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter/ index';
import { TodoSearch } from '../TodoSearch/ index';
import { TodoList } from '../TodoList/ index';
import { TodoItem } from '../TodoItem/ index';
import { TodoForm } from '../TodoForm/index'
import { CreateTodoButton} from '../CreateTodoButtom/ index';
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';


function App() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
      </TodoHeader>

      
      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
        {searchedTodos.map(todo => (
          <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
          </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            />
          </Modal>
        )}
      

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        
      />
    </React.Fragment>
  );
}

export default App;