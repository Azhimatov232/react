import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    return (
        <ul className="list-group mt-3">
           <TodoItem important >Reading</TodoItem>
           <TodoItem >Cooking</TodoItem>
           <TodoItem >Sleeping</TodoItem>
           {/* <li className="list-group-item">Cook</li>
           <li className="list-group-item">Sleep</li> */}
        </ul>
    );
};

export default TodoList;