import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import FirstMotionComponent from "../components/FirstMotionComponent";
import CategoryContainer from "../components/CategoryContainer";

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
          <Route
            path="/groups"
            element={<CategoryContainer category="Groups" />}
          />
          <Route
            path="/members"
            element={<CategoryContainer category="Members" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
