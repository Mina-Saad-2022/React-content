import { Route, Routes } from "react-router-dom";
import One from "./Route/one"; // تأكد من المسار صحيح

const AppRouter = () => {
  return (
    <div className="Container">
      <Routes>
        <Route path="/Route/one" element={<One />} />
      </Routes>
    </div>
  );
};

export { AppRouter };
