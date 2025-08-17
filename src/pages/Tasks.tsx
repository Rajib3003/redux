import { AddTaskModul } from "@/components/module/tasks/AddTaskModul";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook"


export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <>
      <h1 className="text-2xl font-semibold mb-5">Tasks</h1>
      <div className="flex justify-end mb-5 mr-3">
        <AddTaskModul />
      </div>
      
     {tasks.map((task) => (<TaskCard task={task} key={task.title} />))}  
    </>
  )
}
