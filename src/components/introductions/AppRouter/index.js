import {Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-3">
            <Routes>
              <Route variant="primary" path="/one" element={<one />} />
            </Routes>
        </div>
      </div>
    </div>
  );
};

export { AppRouter };
