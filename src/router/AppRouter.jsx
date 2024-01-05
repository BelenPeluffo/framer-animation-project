import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import FirstMotionComponent from "../components/FirstMotionComponent";
import Groups from "../pages/Groups";
import Idols from "../pages/Idols";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/first-component"
            element={
              <FirstMotionComponent text="This is where it all starts." size="big" />
            }
          />
          <Route
            path="/second-component"
            element={
              <FirstMotionComponent text="This is where it all continues." size="big" />
            }
          />
          <Route
            path="/groups"
            element={<Groups />}
          />
          <Route
            path="/members"
            element={<Idols />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
