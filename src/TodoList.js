export default function TodoList({ todos }) {
    return (
        <div>
            <h2>My todo list</h2>
            {todos.length > 0 ? (
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo.name} (is complete: {todo.isComplete.toString()})</li>
                    ))}
                </ul>
            ) : (
                <p>There are no todos!</p>
            )}
        </div>
    )
}