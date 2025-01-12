import { Routes, Route } from "react-router-dom";
import Stories from "./pages/Stories";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/Stories" element={<Stories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
