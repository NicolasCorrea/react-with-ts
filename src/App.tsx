import { Counter } from "./components/Counter";
import { TimerParent } from "./components/TimerParent";
import { User } from "./components/User";
import { CounterRed } from "./components/CounterRed";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <User />

      <h2>useEffect - useRef</h2>
      <hr/>

      <TimerParent />

      <h2>useReducer</h2>
      <hr/>

      <CounterRed />


      <h2>customHooks</h2>
      <hr/>

      <Formulario />
    </>
  );
}

export default App;
