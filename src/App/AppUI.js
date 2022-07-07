import React from 'react';
import {TodoContext} from '../TodoContext';
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

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

      
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
            <TodoForm />
          </Modal>
        )}
      

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        
      />
    </React.Fragment>
  );
}

export { AppUI };