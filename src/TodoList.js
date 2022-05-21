import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import styles from './TodoList.module.css';

// Render a list of todo items if there are any, or a "no items" message otherwise.
export default function TodoList() {

    // Grab the todos from context, along with a function
    // to toggle the state of a todo.
    const { todos, todosLoading, toggleTodoComplete } = useContext(AppContext);

    return (
        <div>
            <h2>My todo list</h2>
            {todosLoading && <p>Loading...</p>}
            {todos && todos.length > 0 ? (
                <ul className={styles.list}>
                    {todos.map((todo) => (
                        <li key={todo.id} className={styles.listItem} onClick={() => toggleTodoComplete(todo)}>{todo.description} (is complete: {todo.isComplete.toString()})</li>
                    ))}
                </ul>
            ) : (
                <p>I have nothing to do - time to sleep 😴</p>
            )}
        </div>
    )
}