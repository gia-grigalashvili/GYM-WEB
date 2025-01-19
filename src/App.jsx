import { Routes, Route } from "react-router-dom";
import Stories from "./pages/Stories";
import HomePage from "./pages/HomePage";
import Servicies from "./pages/Servicies";
import Contact from "./pages/Contact";
import BlogsPage from "./pages/BlogsPage";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AdminHeader from "./components/AdminPanel/Header/AdminHeader";
function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/Services" element={<Servicies />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blogs" element={<BlogsPage />} />

          <Route path="admin/login" element={<AdminPanel />} />
          <Route path="/admin-dashboard" element={<AdminHeader />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
