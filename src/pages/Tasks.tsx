import { AddTaskModul } from "@/components/module/tasks/AddTaskModul";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook"


export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <>
    <div className="flex items-center justify-between mb-5 p-4 bg-white rounded-lg shadow-md mt-4 bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Tasks</h1>
      <AddTaskModul />
    </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (<TaskCard task={task} key={task.id} />))}  
      </div>
     
    </>
  )
}
