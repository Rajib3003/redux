import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

import { Card, CardAction,  CardContent,  CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2} from "lucide-react";
import UpdateTaskModul from "./UpdateTaskModul";
import { selectUsers } from "@/redux/features/task/userSlice";
import { Label } from "@/components/ui/label";


interface IProps {
    task: ITask;
}







export default function TaskCard({ task }: IProps) {
    const dispatch = useAppDispatch();
    // const handleUpdate = () => {
    //     dispatch(updateTask(task));
    // }
    const users = useAppSelector(selectUsers);
    const assignedUser = users.find(user => user.id === task.assignedTo);
  return (
    <>

    <Card className="w-full max-w-sm relative">
      <CardHeader >
     <CardTitle className="flex items-center gap-2">
        <span
          className={cn(
            "h-3 w-3 rounded-full",
            {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            }
          )}
        />
        <span className="ms-2">{task.title}</span>
      </CardTitle>
      





        <CardAction className="absolute top-2 right-2 flex items-center gap-2">
            <Checkbox
                checked= {task.isCompleted}
                onClick={() => dispatch(toggleCompleteState(task.id))}
                />
          <Button onClick={() => dispatch(deleteTask(task.id))} variant="link" className="p-0 text-red-500">
            <Trash2  />            
          </Button>      
            <UpdateTaskModul task={task}/> 
        </CardAction>
      </CardHeader>
      <CardContent>
        <Label htmlFor="terms" className="mb-2">Discription: {task.discription}</Label>
        <Label htmlFor="terms" className="mb-2">Due Date : {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}</Label>
        <Label htmlFor="terms">Assigned To : {assignedUser ? assignedUser.name : "Unassigned"}</Label>
                  
      
              
        
     
              
        
     </CardContent>
     
      
    </Card>
     </>
  )
}
