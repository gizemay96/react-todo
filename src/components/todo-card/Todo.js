import React, { useState } from 'react'
import AddTodo from './AddTodo/addTodo.js';
import List from './List/List.js';

function Todo() {

    const [todos, setTodos] = useState([{
        idTodo: 1,
        dsTodo: "Markete Git.",
        active: true,
        completed: false
    },
    {
        idTodo: 2,
        dsTodo: "Ödev  Yap.",
        active: true,
        completed: false
    }]);

    return (
        <div>
            <div>
                <AddTodo addTodo={setTodos} todos={todos} ></AddTodo>
            </div>

            <div className="todo-list">
                <List addTodo={setTodos} todos={todos} ></List>
            </div>
        </div>


    )
}

export default Todo
