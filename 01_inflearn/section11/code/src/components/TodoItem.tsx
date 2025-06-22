import React, { useContext } from 'react';
import { Todo } from '../types';
import { TodoDispatchContext, TodoStateContext, useTodoDispatch } from '../App';

function TodoItem({ id, content }: Todo) {
    const dispatch = useTodoDispatch();
    return (
        <li key={id}>
            {id}번: {content}
            <button onClick={() => dispatch.handleDeleteTodo(id)}>삭제</button>
        </li>
    );
}

export default TodoItem;
