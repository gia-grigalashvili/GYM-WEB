import { Routes, Route, Navigate } from "react-router-dom";
import Stories from "./pages/Stories";
import HomePage from "./pages/HomePage";
import Servicies from "./pages/Servicies";
import Contact from "./pages/Contact";
import BlogsPage from "./pages/BlogsPage";
import AdminPanel from "./components/AdminPanel/AdminPanel";

import AdminLayout from "./Layouts/AdminLayout";

import AboutMe from "./pages/AdminPage/AboutMe";
import AdminSerivices from "./components/AdminPanel/AdminPanel/AdminAbout/AdminServicies/AdminSerivices";
import AdminBlog from "./pages/AdminPage/AdminBlog";

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

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="stories" replace />} />
            <Route path="stories" element={<AboutMe />} />
            <Route path="Servicies" element={<AdminSerivices />} />
            <Route path="Blogs" element={<AdminBlog />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
