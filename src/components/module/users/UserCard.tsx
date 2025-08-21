import { Button } from "@/components/ui/button";

import type { IUser } from "@/types";
import { useAppDispatch } from "@/redux/hook";
import { Card, CardAction,  CardDescription,  CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2} from "lucide-react";
import { deleteUser } from "@/redux/features/task/userSlice";


interface IProps {
    user: IUser;
}

export default function UserCard({ user }: IProps) {
   const dispatch = useAppDispatch();
  return (
    <>
    <Card className="w-full max-w-sm ">
      <CardHeader >
        <CardTitle > {user.name}</CardTitle>
        <CardDescription> {user.age}</CardDescription>
        <CardAction>           
          <Button onClick={() => dispatch(deleteUser(user.id))} variant="link" className="p-0 text-red-500">
            <Trash2  />            
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
     </>
  )
}
