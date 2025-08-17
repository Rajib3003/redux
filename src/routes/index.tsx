
import App from "@/App";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <App />,
        Component: App,
        
        children: [
            {
                index: true,
                // path: "tasks",
                element: <Tasks />
            },
            {
                path: "tasks",
                element: <Tasks />
            },
            {
                path: "users",
                element: <Users />
            },
            
        ]
    }
]);

export default router; 