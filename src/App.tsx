import {motion} from "framer-motion";
import './styles/App.scss';

function App() {

  return (
    <>
    <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          // style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  )
}

export default App
