import React from "react";
import Card, {CardVariant} from "./components/Card";
import EventsExample from "./components/EventsExample";
import {Route, Routes} from "react-router-dom"
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={"users"} element={<UsersPage/>}/>
                <Route path={"todos"} element={<TodosPage/>}/>
                <Route path={"users/:id"} element={<UserItemPage/>}/>
                <Route path={"todos/:id"} element={<TodoItemPage/>}/>
                <Route path={"/"} element={<div>
                    <EventsExample/>
                    <Card width="200px"
                          height="200px"
                          variant={CardVariant.primary}
                    >
                        <div>it's a normal</div>
                    </Card>
                </div>}/>
            </Routes>

        </>
    )
}
export default App