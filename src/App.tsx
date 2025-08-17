import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {

  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state) => state.counter);

  const handelIncrement = (amount:number) => {
    dispatch(increment(amount));
  }
  const handelDecrement = () => {
    dispatch(decrement());
  }


  return (
    <>   
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
