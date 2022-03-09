import React, {FC, useState} from "react";
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    const [checked, setChecked] = useState(todo.completed)
    return (
        <div style={{padding: "15px", border: "1px solid black"}}>
            <input id={todo.id + ""} type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
            <label htmlFor={todo.id + ""}>
                {todo.id}, {`${todo.title}`}
            </label>
        </div>
    )
}
export default TodoItem