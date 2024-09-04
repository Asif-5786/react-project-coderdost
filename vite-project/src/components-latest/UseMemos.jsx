import React, { useState } from 'react'

const UseMemos = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);

    const increment = () => {
        setCount((count) => count + 1);
    }
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    }
    console.log(todos);
    return (
        <>
            <div>
                <h2>My todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count:{count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
            </div>
        </>
    )
}

export default UseMemos
