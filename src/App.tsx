import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counterSlice";
import "./App.css";
import { useState } from "react";

function App() {
  const [numDogs, setNumDogs] = useState(10);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  function handleClick() {
    dispatch(incremented());
  }
  function amountClick(amount: number) {
    dispatch(amountAdded(amount));
  }

  return (
    <>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <button onClick={() => amountClick(1000000)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <select value={numDogs} onChange={(e)=>setNumDogs(Number(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>

        </select>
      </div>
      <div className="card">
        <p>Numbers of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <>
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img style={{ width: 500 }} src={breed.image.url} alt="" />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
