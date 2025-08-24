import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,  
  DialogDescription,  
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl,  FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useCreateTaskMutation } from "@/redux/api/baseApi";
import { addTask } from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/task/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";
import { format } from "date-fns";

import { CalendarIcon } from "lucide-react";
import  { useState } from "react";


import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

export function AddTaskModul() {
  const form = useForm({
    defaultValues: {
      title: "",
      discription: "",
      priority: "",
      dueDate: "",
      assignedTo: null,
    },
  });
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers)
  const [createTask, {data}] = useCreateTaskMutation();

  console.log("Data======", data);

  const onSubmit:SubmitHandler<FieldValues> =async (data) => {



    const payload = {
      ...data,
      dueDate: data.dueDate ? new Date(data.dueDate).toISOString() : "",

    }

    const res = await createTask(payload);
    console.log("Res======", res);

   
    dispatch(addTask(payload as ITask));
    form.reset(); 
    setOpen(false);

  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
        <DialogTrigger asChild>
          <Button >Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription className="sr-only">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
           
          </DialogHeader>
          
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                <FormItem >
                    <FormLabel className="mt-2">Title</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="discription"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="mt-2">Discription</FormLabel>
                    <FormControl>                    
                    <Textarea  {...field} placeholder="Type your discription here." />
                    </FormControl>                    
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="mt-2">Priority</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger className="w-full">
                            <SelectValue defaultValue={"high"} />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                    </Select>             
                    </FormItem>
                    )}
                />
            {/* <FormField
                control={form.control}
                name="assignedTo"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="mt-2">Assigned To</FormLabel>
                    <Select onValueChange={field.onChange}>
                        <FormControl>
                        <SelectTrigger className="w-full">
                            <SelectValue defaultValue={"high"} />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {users.map((user) => 
                            <SelectItem value={user.id} key={user.id}>{user.name}</SelectItem>
                           ) }  
                        </SelectContent>
                    </Select>             
                    </FormItem>
                    )}
                /> */}
                <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel className="mt-2">DueDate</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                            variant={"outline"}
                            className={cn(
                                " pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                            )}
                            >
                            {field.value ? (
                                format(field.value, "PPP")
                            ) : (
                                <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined}
                            onSelect={field.onChange}
                            disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                            }
                            captionLayout="dropdown"
                        />
                        </PopoverContent>
                    </Popover>                    
                    </FormItem>
                )}
                />


            <DialogFooter className="mt-4">
                <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Submit</Button>
            </DialogFooter>
            </form>
        </Form>


          
        </DialogContent>
      
    </Dialog>
  )
}
