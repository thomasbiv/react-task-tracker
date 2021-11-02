import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30pm',
          reminder: true
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: 'Feb 6th at 1:30pm',
          reminder: true
      },
      {
          id: 3,
          text: 'Food Shopping',
          day: 'Feb 6th at 3:30pm',
          reminder: false
      },
    ])

  //Delete Task Function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) //display all tasks with an id that is not the passed id
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header title = 'Task Master'/>
      <AddTask />
      {
        tasks.length === 0
        ? 
          <div>
            No tasks
          </div>
        :
          <div>
            <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
          </div>
      }
    </div>
  );
}

export default App;
