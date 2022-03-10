import React, {FC, useState} from "react";
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo
    onClick: (user: ITodo) => void
}

const TodoItem: FC<TodoItemProps> = ({todo, onClick}) => {
    const [checked, setChecked] = useState(todo.completed)
    return (
        <div
            style={{padding: "15px", border: "1px solid black"}}
            onClick={() => onClick(todo)}
        >
            <input id={todo.id + ""}
                   type="checkbox"
                   checked={checked}
                   onChange={() => setChecked(!checked)}
                   style={{cursor: "pointer"}}
            />
            <span style={{cursor: "pointer"}}
            >
                {todo.id}, {`${todo.title}`}
            </span>
        </div>
    )
}
export default TodoItem