import { useState } from 'react'
import styles from './TodoList.module.css'

const TodoList = () => {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === "") return;
    const novaTarefa = { texto: task, concluida: false }
    setTasks([...tasks, novaTarefa])
    setTask("")
  }

  const toggleConcluida = (index) => {
    const novasTarefas = [...tasks]
    novasTarefas[index].concluida = !novasTarefas[index].concluida
    setTasks(novasTarefas)
  }

  const removerTarefa = (index) => {
    const novasTarefas = tasks.filter((_, i) => i !== index)
    setTasks(novasTarefas)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Tarefas</h2>
      
      <div className={styles.inputContainer}>
        <input
          type='text'
          placeholder='Adicionar tarefa'
          className={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask} className={styles.button}>Adicionar</button>
      </div>

      <ul className={styles.taskList}>
        {tasks.map((tarefa, index) => (
          <li key={index} className={styles.taskItem}>
            <span
              onClick={() => toggleConcluida(index)}
              style={{
                textDecoration: tarefa.concluida ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {tarefa.texto}
            </span>
            <button
              onClick={() => removerTarefa(index)}
              className={styles.removeButton}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
