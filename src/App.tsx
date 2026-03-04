import { Routes, Route, Navigate } from "react-router-dom";
import CoverLetterPage from "@/pages/CoverLetterPage";

export default function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Navigate to="/cover-letter/first-one" />} />

      {/* Dynamic cover letter route */}
      <Route path="/cover-letter/:fileName" element={<CoverLetterPage />} />
    </Routes>
  );
}
