import { useState } from 'react';





const orders = [100, 200, 300]
function App() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)
    return total
  });

  const handleIncrease = () => {
    // setCounter(counter + 1);
    setCounter(preCount => preCount + 1);
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
