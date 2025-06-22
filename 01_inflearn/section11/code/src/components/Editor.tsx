import React, { useState } from 'react';
import { useContext } from 'react';
import { TodoDispatchContext, useTodoDispatch } from '../App';

function Editor() {
    const [text, setText] = useState<string>('');
    const dispatch = useTodoDispatch();
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onClickButton = () => {
        dispatch.handleAddTodo(text);
        setText('');
    };

    return (
        <>
            <input value={text} onChange={onChangeInput} />
            <button onClick={onClickButton}>추가</button>
        </>
    );
}

export default Editor;
