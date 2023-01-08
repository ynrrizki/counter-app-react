import React, { useState } from "react";
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="container p-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-5">
          <div className="card shadow text-center">
            <div className="card-body">
              <h1 className="my-5">{count}</h1>
              <button
                className="btn btn-danger"
                onClick={() => setCount(count - 1)}
                disabled={count === 0}>Decrement</button>
              <button
                className="btn btn-secondary px-5 m-5"
                onClick={() => setCount(0)}
                disabled={count === 0}>Reset</button>
              <button className="btn btn-success" onClick={() => setCount(count + 1)}>Increment</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
