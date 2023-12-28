import { Fragment, useState } from "react";

function ToDoList({initialList}) {
    const [todos, setToDos] = useState(initialList);

    return (
        <main>
            {
                todos.map(
                    (task, index) => {
                        return (
                            <div className="p-3 m-3" key={index}>
                                <p>
                                    {task}
                                </p>
                                <button onClick={() => {
                                    setToDos(
                                        (value) => {
                                            return [
                                                ...value.slice(0, index),
                                                ...value.slice(index + 1)
                                            ];
                                        }
                                    );
                                }}>
                                    x
                                </button>
                            </div>
                        )
                    }
                )
            }
        </main>
    );  
}

export default ToDoList;
