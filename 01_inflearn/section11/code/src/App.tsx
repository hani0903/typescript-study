import React, { useContext, useReducer, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';

type Action =
    | {
          type: 'CREATE';
          data: {
              id: number;
              content: string;
          };
      }
    | { type: 'DELETE'; id: number };

function reducer(state: Todo[], action: Action) {
    switch (action.type) {
        case 'CREATE':
            return [...state, action.data];
        case 'DELETE':
            return state.filter((todo) => todo.id !== action.id);
    }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
    handleAddTodo: (text: string) => void;
    handleDeleteTodo: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
    const dispatch = useContext(TodoDispatchContext);

    if (!dispatch) throw new Error('TodoDispatchContext에 문제가 있다.');
    return dispatch;
}

function App() {
    const [todos, dispatch] = useReducer(reducer, []);

    const idRef = useRef(0);

    const handleAddTodo = (text: string) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                content: text,
            },
        });
    };

    const handleDeleteTodo = (id: number) => {
        dispatch({
            type: 'DELETE',
            id: id,
        });
    };
    return (
        <div className="App">
            <h1>Todo</h1>
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext value={{ handleAddTodo, handleDeleteTodo }}>
                    <Editor />
                    <ul>
                        {todos.map((todo) => (
                            <TodoItem id={todo.id} content={todo.content} />
                        ))}
                    </ul>
                </TodoDispatchContext>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
