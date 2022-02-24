import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/create" element={<AddExpensePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
