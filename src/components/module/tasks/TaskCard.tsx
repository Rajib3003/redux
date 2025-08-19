import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { toggleCompleteState } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react";


interface IProps {
    task: ITask;
}







export default function TaskCard({ task }: IProps) {
    const dispatch = useAppDispatch();
  return (
    <>

    <Card className="w-full max-w-sm ">
      <CardHeader >
        <CardTitle className={cn("size-3 rounded-full",
                    {
                        "bg-green-500": task.priority === 'low',
                        "bg-yellow-500": task.priority === 'medium',
                        "bg-red-500": task.priority === 'high',
                        
                    }
                )}></CardTitle>
        <CardDescription>
          {task.discription}
          <br/>
          {task.dueDate}
        </CardDescription>
        <CardAction>
            <Checkbox
                checked= {task.isCompleted}
                onClick={() => dispatch(toggleCompleteState(task.id))}
                />
          <Button variant="link" className="p-0 text-red-500"><Trash2 /></Button>
          
        </CardAction>
      </CardHeader>
     
      
    </Card>
     </>
  )
}
