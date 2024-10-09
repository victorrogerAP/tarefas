import { TrashIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";


function Task(props) {
  return (
    <>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button onClick={() => {props.onTaskClick(task.id) }}
              className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
              {task.title}
              {task.iscompleted ? " Completa" : " Incompleta"}
            </button>
            <button className="bg-slate-400 p-2 rounded-md text-white"><ChevronRight/></button>
            <button onClick={()=> 
              props.onDeleteTaskClick(task.id)} 
            className="bg-slate-400 p-2 rounded-md text-white"><TrashIcon/></button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Task;