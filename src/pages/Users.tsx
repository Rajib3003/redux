import AddUserModul from "@/components/module/users/AddUserModul";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/task/userSlice";
import { useAppSelector } from "@/redux/hook";



export default function Users() {
   const users = useAppSelector(selectUsers);
  console.log(users);
  return (
    <>
    <div className="flex items-center justify-between mb-5 p-4 bg-white rounded-lg shadow-md mt-4 bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Users</h1>      
      <AddUserModul />
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (<UserCard user={user} />))}  
      </div>
     
    </>
  )
}
