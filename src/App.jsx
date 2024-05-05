// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./redux/counter";
import { signIn, signOut } from "./redux/isLogged";

function App() {
  // const [count, setCount] = useState(0)
  const { count } = useSelector(state => state.counter)
  const { loggedIn } = useSelector(state => state.logged)

  const dispatch = useDispatch();

  return (
    <div className="App">
      {loggedIn && <p>Only logged in User can see me!</p>}
      <h1>The count is: {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>increment</button> */}
      <button onClick={() => dispatch(increment())}>increment</button>
      {/* <button onClick={() => setCount(count - 1)}>decrement</button> */}
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(55))}>Increment by 55</button>
      <button onClick={() => dispatch(signIn())}>Sign In</button>
      <button onClick={() => dispatch(signOut())}>Sign Out</button>

    </div>
  )
}

export default App
