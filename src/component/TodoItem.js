import React from 'react';

const TodoItem = (props) => {
    let className2 = "list-group-item "
    if (props.important){
        className2 += "active"
    }
    return (
        <li className={className2}>{props.children}</li>
    );
};

export default TodoItem;