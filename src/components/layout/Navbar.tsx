


// import { Logo } from "@/assets/Logo";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
    return (
        <nav className='max-w-7xl mx-auto h-16 flex items-center justify-between px-5'>
            <div className='flex items-center gap-3'>
                <Link to="/" className='text-blue-500 hover:underline'>Home</Link>
                <Link to="/users" className='text-blue-500 hover:underline'>Users</Link>
                <Link to="/tasks" className='text-blue-500 hover:underline'>Tasks</Link>
            </div>
            <ModeToggle />
        </nav>   
    )
}