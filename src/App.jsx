import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './state/actions';

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement(0))}>Decrement</button>
      <button onClick={() => dispatch(increment(2))}>Increment</button>
    </div>
  );
}

export default App;
