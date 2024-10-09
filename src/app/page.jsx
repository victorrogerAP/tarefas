"use client"
import AddTask from "@/components/AddTask";
import Task from "@/components/Task";
import { useState } from "react";


function Home() {
  const [tarefas, setTasks] = useState([{
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar milionário",
    iscompleted: false
  },
  {
    id: 2,
    title: "Estudar programação",
    description: "Estudar programação para se tornar milionário",
    iscompleted: false
  },
  {
    id: 3,
    title: "Estudar programação",
    description: "Estudar programação para se tornar milionário",
    iscompleted: false
  }]);
  function clicarTarefa(taskId) {
    const newTasks = tarefas.map((task) => {
      if (task.id === taskId) {
        //if preciso atualizar essa tarefa
        return { ...task, iscompleted: !task.iscompleted }
      }
      else {
        return task;
      }
    })
    setTasks(newTasks);
  }
  function deletarTarefa(taskId){
    const newTesks =  tarefas.filter(task => task.id !== taskId)
    // function task(){task.id}
    setTasks(newTesks)
  }
  function adicionarTarefa(titulo, descricao){
    const newTask = {
      id: tarefas.length + 1,
      title: titulo,
      description: descricao,
      iscompleted: false
    }
    setTasks({...tarefas,newTask});
  }
  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3x1 text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <Task tasks={tarefas} onTaskClick={clicarTarefa} onDeleteTaskClick={deletarTarefa}  />
        <AddTask onAddTaskSubmit={adicionarTarefa}/>
      </div>
    </div>
  )
}
export default Home;