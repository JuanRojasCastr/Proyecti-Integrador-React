import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import TodoList from './components/todoList/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  )
}

export default App
