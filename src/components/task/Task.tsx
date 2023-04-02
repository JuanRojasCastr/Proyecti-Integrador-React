import './Task.css'

interface Task {
    id: number;
    description: string;
    completed: boolean;
    onTaskCompleted: any
    onDeleteTask: any;
}

const Task = ({id, description, completed, onTaskCompleted, onDeleteTask}: Task) => {
    return (
        
        <li className='task'>
            <input
                className='checkmark'
                type="radio"
                checked={completed}
                onChange={() => onTaskCompleted(id)}
            />
            <span>{description}</span>
            <button onClick={() => onDeleteTask(id)}>Delete</button>
        </li>
    )
}

export default Task;