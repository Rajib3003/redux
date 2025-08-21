import { Button } from "@/components/ui/button"
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
import { addUser } from "@/redux/features/task/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type {  IUser } from "@/types";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"


export default function AddUserModul() {
  const form = useForm({
    defaultValues: {
      name: "",
      age: 0,
    },
  });   

  const dispatch = useAppDispatch();

  const onSubmit:SubmitHandler<FieldValues> = (data) => {

    const payload = {
      ...data,     
    }
   
    dispatch(addUser(payload as IUser));

  }

  return (
    <Dialog>      
        <DialogTrigger asChild>
          <Button >Add User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
            <DialogDescription className="sr-only">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>           
          </DialogHeader>          
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>                    
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>                    
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