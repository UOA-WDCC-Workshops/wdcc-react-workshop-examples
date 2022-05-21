import axios from 'axios';
import React from 'react';
import useGet from './useGet';

// Create a context object, can be used anywhere we need
// to access the context info in this provider.
export const AppContext = React.createContext({ todos: [] });

// const initialTodos = [
//     {
//         name: 'Prepare WDCC workshop',
//         isComplete: true
//     },
//     {
//         name: 'Run WDCC workshop',
//         isComplete: false
//     }
// ]

export function AppContextProvider({ children }) {

    const { data, isLoading, refresh } = useGet('https://trex-sandwich.com/wdcc-workshop/api/todos/amea020');

    // Stateful todo list
    // const [todos, setTodos] = useState(initialTodos);

    function toggleTodoComplete(todo) {
        // Updates the todo by toggling its isComplete status
        const newTodo = {
            ...todo,
            isComplete: !todo.isComplete
        }

        // PUTs the updated todo on the server (replacing the old one)
        axios.put(`https://trex-sandwich.com/wdcc-workshop/api/todos/amea020/${todo.id}`, newTodo)
            .then(() => refresh());
    }

    // All this info will be made available to any children of
    // this provider
    const context = {
        todos: data,
        todosLoading: isLoading,
        toggleTodoComplete
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )

}