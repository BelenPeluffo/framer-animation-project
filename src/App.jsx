import "./assets/styles.css";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="main-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          // Animations will change, but here's the start set-up
          variants={{
            initial: {
              x: pathname === "/" ? 1000 : -1000,
              height: "100%",
              width: "100%",
            },
            animate: { x: 0 },
            exit: {
              transition: {
                x: pathname !== "/" ? 1000 : -1000,
                type: "spring",
              },
            },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ height: "100%", width: "100%" }}
        >
          {pathname === "/" ? <Home /> : <Outlet />}
        </motion.div>
      </AnimatePresence>
      {pathname !== "/" && (
        <BottomBar
          actions={[
            <button key="move" style={{ margin: 20 }} onClick={handleClick}>
              {"Go back!"}
            </button>,
          ]}
        />
      )}
    </div>
  );
}

export default App;
