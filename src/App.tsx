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
      <button onClick={()=> handelIncrement(5)}>Increment by 5 </button>
      <button onClick={() =>handelIncrement(1)}>Increment</button>
      <div>counter: {count}</div>
      <button onClick={handelDecrement}>Decrement</button>
      <Button>TEST</Button>
    </>
  )
}

export default App
