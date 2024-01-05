import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import FirstMotionComponent from "../components/FirstMotionComponent";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/first-component"
            element={
              <FirstMotionComponent text="This is where it all starts." />
            }
          />
          <Route
            path="/second-component"
            element={
              <FirstMotionComponent text="This is where it all continues." />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
