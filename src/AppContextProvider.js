import React from 'react';
import { useState } from 'react';

// Create a context object, can be used anywhere we need
// to access the context info in this provider.
export const AppContext = React.createContext({ todos: [] });

const initialTodos = [
    {
        name: 'Prepare WDCC workshop',
        isComplete: true
    },
    {
        name: 'Run WDCC workshop',
        isComplete: false
    }
]

export function AppContextProvider({ children }) {

    // Stateful todo list
    const [todos, setTodos] = useState(initialTodos);

    function toggleTodoComplete(index) {
        // Copy todo array
        const newTodos = [...todos];
        // Toggle the single todo in the copied array
        newTodos[index].isComplete = !newTodos[index].isComplete;
        // Completely replace the old todo list with the new one
        setTodos(newTodos);
    }

    // All this info will be made available to any children of
    // this provider
    const context = {
        todos,
        toggleTodoComplete
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )

}