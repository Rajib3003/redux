import { useDispatch } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice"


function App() {

  const dispatch = useDispatch();
  const handelIncrement = () => {
    dispatch(increment());
  }
  const handelDecrement = () => {
    dispatch(decrement());
  }


  return (
    <>
      <button onClick={handelIncrement}>Increment</button>
      <div>Counter: 0</div>
      <button onClick={handelDecrement}>Decrement</button>
    </>
  )
}

export default App
