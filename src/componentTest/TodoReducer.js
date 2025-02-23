import React, { useReducer, useState } from 'react';

// Reducer function
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case 'toggle':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case 'remove':
            return state.filter(todo => todo.id !== action.payload);
        default:
            throw new Error('Unknown action type');
    }
};

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [text, setText] = useState('');

    const addTodo = (e) => {
        dispatch({ type: 'add', payload: text });

        console.log(e.target)
        setText('');
    };

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
            <span
                onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
                        <button onClick={() => dispatch({ type: 'remove', payload: todo.id })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
