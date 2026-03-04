import { Routes, Route, Navigate } from "react-router-dom";
import CoverLetterPage from "@/pages/CoverLetterPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cover-letter/john-doe" />} />
      <Route path="/cover-letter/:fileName" element={<CoverLetterPage />} />
    </Routes>
  );
}
