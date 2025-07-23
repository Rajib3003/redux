import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice"


function App() {

  const dispatch = useDispatch();
  const {count} = useSelector((state: any) => state.counter);

  const handelIncrement = () => {
    dispatch(increment());
  }
  const handelDecrement = () => {
    dispatch(decrement());
  }


  return (
    <>
      <button onClick={handelIncrement}>Increment</button>
      <div>counter: {count}</div>
      <button onClick={handelDecrement}>Decrement</button>
    </>
  )
}

export default App
