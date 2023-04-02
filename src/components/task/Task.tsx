import DeleteIcon from '@mui/icons-material/Delete';
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
            <button className='deleteTask' onClick={() => onDeleteTask(id)}>
                <DeleteIcon />
            </button>
        </li>
    )
}

export default Task;