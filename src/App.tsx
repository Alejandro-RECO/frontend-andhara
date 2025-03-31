import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminPage from "@/pages/admin";
import MarketingPage from "./pages/marketing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketingPage/>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
