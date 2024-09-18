import React from 'react';

const TodoList = () => {
    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState('');

    const addTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask('');
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Agregar tarea</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;