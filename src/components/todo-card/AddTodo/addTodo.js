import React, { useState, useEffect } from 'react'


function AddTodo({ todos, addTodo }) {

    const [todo, setTodo] = useState({ idTodo: 0, dsTodo: "", active: true, completed: false });

    useEffect(() => {
        setTodo({ idTodo: 0, dsTodo: "", active: true, completed: false });
    }, [todos])

    const onChangeInput = (e) => {
        let max = Math.max.apply(null, todos.map((item) => {
            return item.idTodo;
        }));

        setTodo({ ...todo, dsTodo: e.target.value, idTodo: max + 1 });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo([...todos, todo]);
    }

    return (
        <div>
            <div className="search-input" >
                <form onSubmit={onSubmit} >
                    <input value={todo.dsTodo ? todo.dsTodo : " "} onChange={onChangeInput} className="new-todo" placeholder="What needs to be done?" autoFocus />
                </form>
            </div>
        </div>
    )
}

export default AddTodo;
