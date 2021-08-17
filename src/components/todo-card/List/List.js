import React, { useState, useEffect } from 'react'
import '../../../App.css';

function List({ todos, addTodo }) {
    const [changedTodos, getChanges] = useState();
    const [filteredList, getFilteredList] = useState({ type: "all", list: todos });

    const changeTodo = (changeType, todo) => {
        let newTodos = todos;

        switch (changeType) {

            case 'complete':
                newTodos.forEach(item => {
                    if (item.idTodo === todo.idTodo) { item.completed = !item.completed; item.active = !item.active }
                });
                break;

            case 'delete':
                const deleteIndex = newTodos.findIndex((item) => item.idTodo === todo.idTodo)
                newTodos.splice(deleteIndex, 1);
                break;

            case 'clear-completed':
                newTodos = todos.filter(item => !item.completed);
                break;

            default:
                newTodos = todos;

        }

        getChanges(newTodos);
        addTodo(newTodos);
    }


    const setFilteredList = (filterType) => {

        if (filterType === 'all') {
            getFilteredList({ type: filterType, list: todos })
        } else if (filterType === 'active') {
            getFilteredList({ type: filterType, list: todos.filter((item) => item.active === true) })
        } else if (filterType === 'completed') {
            getFilteredList({ type: filterType, list: todos.filter((item) => item.completed === true) })
        }
    }

    useEffect(() => {
        getChanges();
        setFilteredList(filteredList.type);
        // eslint-disable-next-line
    }, [changedTodos, todos])



    return (
        <div className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>



            <ul className="todo-list">
                {
                    filteredList.list.map((todo, ind) =>
                        <li key={ind} className={todo.completed ? `completed` : `active`}>
                            <div className="view">
                                <input checked={todo.completed} onChange={() => changeTodo('complete', todo)} className="toggle" type="checkbox" />
                                <label> {todo.dsTodo} </label>
                                <button onClick={() => changeTodo('delete', todo)} className="destroy"></button>
                            </div>
                        </li>
                    )
                }

            </ul>


            <footer className="footer">

                <div className="footer-case" >
                    <span className="todo-count">
                        <strong > {filteredList.list.length} Item Left</strong>
                    </span>

                    <ul className="filters">
                        <li className="filter-li">
                            <button onClick={() => setFilteredList('all')} className={filteredList.type === 'all' ? 'selected' : 'non'}>All</button>
                        </li>
                        <li className="filter-li">
                            <button onClick={() => setFilteredList('active')} className={filteredList.type === 'active' ? 'selected' : 'non'}>Active</button>
                        </li>
                        <li className="filter-li">
                            <button onClick={() => setFilteredList('completed')} className={filteredList.type === 'completed' ? 'selected' : 'non'}>Completed</button>
                        </li>
                    </ul>

                    <button
                        onClick={() => changeTodo('clear-completed')}
                        className="clear-completed">
                        Clear completed
                    </button>
                </div>
            </footer>


        </div>

    )
}

export default List
