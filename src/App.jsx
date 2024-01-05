import "./assets/styles.css";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleClick = () => {
    navigate(pathname.includes("second") ? "/first-component" : "/second-component");
  };
  return (
    <div className="main-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={{
            initial: { x: -1000 },
            animate: { x: 0 },
            exit: { transition: { x: -1000 } },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <button style={{ margin: 20 }} onClick={handleClick}>
        {pathname.includes('first') ? "Let's go!" : "Go back!"}
      </button>
    </div>
  );
}

export default App;
