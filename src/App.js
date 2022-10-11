import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "./sagaActions";

function App() {
  const dispatch = useDispatch();
  const { fact } = useSelector((state) => state.catFact);
  console.log(fact);

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({
            type: sagaActions.GET_FACT,
          })
        }
      >
        GET FACT
      </button>
      <div>{fact}</div>
    </div>
  );
}

export default App;
