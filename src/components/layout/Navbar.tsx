


// import { Logo } from "@/assets/Logo";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

export default function Navbar() {
    return (
        // <nav className='max-w-7xl mx-auto h-16 flex items-center justify-between px-5'>
        //     <div className='flex items-center gap-3'>
        //         <Link to="/" className='text-blue-500 hover:underline'>Home</Link>
        //         <Link to="/users" className='text-blue-500 hover:underline'>Users</Link>
        //         <Link to="/tasks" className='text-blue-500 hover:underline'>Tasks</Link>
        //     </div>
        //     <ModeToggle />
        // </nav>   
        <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5">
        
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          MyWebsite
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm">Home</Button>
          </Link>
          <Link to="/users">
            <Button variant="ghost" size="sm">Users</Button>
          </Link>
          <Link to="/tasks">
            <Button variant="ghost" size="sm">Tasks</Button>
          </Link>
        </nav>

        {/* Mode Toggle */}
        <ModeToggle />

        {/* Mobile Menu Button (optional) */}
        <div className="md:hidden">
          {/* Add hamburger menu here if needed */}
        </div>
      </div>
    </header>
    )
}