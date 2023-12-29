import { Fragment, useState } from "react";

function markAsDone(list, index){
    return list.map(
        (item, i) => i === index ? {...item, done: true} : item
    );
}

function ToDoApplication ({initialList}) {
    const [todos, setTodos] = useState(initialList);
    const [hideDone, setHideDone] = useState(false);
    const filteredTasks = hideDone ? todos.filter(({done}) => !done) : todos;

    return (
        <main>
            <div style={{"display": "flex", "padding": "3px"}}>
                <button onClick={() => setHideDone(false)}>
                    Show all
                </button>
                <button onClick={() => setHideDone(true)}>
                    Hide done
                </button>
            </div>
            {
                filteredTasks.map(
                    (todo, index) => {
                        return (
                            <p key={todo.task}>
                                {
                                    todo.done ? (
                                        <strike>{todo.task}</strike>
                                    ) : (
                                        <>
                                            {todo.task}
                                            <button onClick={() => setTodos((value) => markAsDone(value, index))}>
                                                x
                                            </button>
                                        </>
                                    )
                                }
                            </p>
                        )
                    }
                )
            }
        </main>
    )
}

export default ToDoApplication;
