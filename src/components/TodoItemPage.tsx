import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
//
const TodoItemPage: FC = () => {

// interface TodoItemPageParams {
//     id: string
// }

    const params = useParams()
    const history = useNavigate()

    const [todo, setTodo] = useState<ITodo | null>(null)
    const [checked, setChecked] = useState<boolean>(false)
    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo>("https://jsonplaceholder.typicode.com/todos/" + params.id)
            setTodo(response.data)
            setChecked(response.data.completed)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history("/todos")}>Back</button>
            <div style={{padding: "15px", border: "1px solid black"}}>
                <h1>ID - {todo?.id} |||| TITLE - {`${todo?.title}`}</h1>
                <input id={todo?.id + ""}
                       type="checkbox"
                       checked={checked}
                       onChange={() => setChecked(!checked)}
                       style={{cursor: "pointer"}}
                />
                <label htmlFor={todo?.id + ""}>Checked</label>

            </div>
        </div>
    );
};

export default TodoItemPage;