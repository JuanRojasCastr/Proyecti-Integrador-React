import React, { useEffect, useState } from "react";
import Task from '../task/Task';
import './TodoList.css'

interface TaskType {
  id: number;
  description: string;
  completed: boolean;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [inputValue, setInputValue] = useState<string>("");

  const addTask = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const newTask: TaskType = {
      id: Date.now(),
      description: inputValue,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputValue("");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId: number, newDescription: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, description: newDescription };
        }
        return task;
      })
    );
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div className='todoList'>
      <div className='wrapper'>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>+</button>
      </div>
      <ul>
        {tasks.map((task) => (
            <Task key={task.id}
                id={task.id} 
                description={task.description} 
                completed={task.completed} 
                onTaskCompleted={toggleTaskCompletion} 
                onDeleteTask={deleteTask} 
            />
        ))}
      </ul>
      <div className='end-block'>
        <span>You have {pendingTasks.length} pending tasks </span>
        <button className='delete' onClick={deleteAllTasks}>Clear All</button>
      </div>
    </div>
  );
};

export default TodoList;