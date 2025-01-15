import { Routes, Route } from "react-router-dom";
import Stories from "./pages/Stories";
import HomePage from "./pages/HomePage";
import Servicies from "./pages/Servicies";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/Services" element={<Servicies />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
