import { AddTaskModul } from "@/components/module/tasks/AddTaskModul";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs,TabsList, TabsTrigger } from "@/components/ui/tabs";

import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook"



export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  console.log(tasks);
  return (
    <>
    <div className="flex items-center justify-between mb-5 p-4 bg-white rounded-lg shadow-md mt-4 bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Tasks</h1>
      <div>
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList>
            <TabsTrigger onClick={()=> dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
          </TabsList>          
        </Tabs>
      </div>
      <AddTaskModul />
    </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (<TaskCard task={task} key={task.id} />))}  
      </div>
     
    </>
  )
}
