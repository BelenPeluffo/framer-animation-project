import "./assets/styles.css";
import { AnimatePresence } from "framer-motion";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/second-component');
  }
  return (
    <div className="main-container">
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      <button style={{margin: 20}} onClick={handleClick}>Let's go!</button>
    </div>
  );
}

export default App;
