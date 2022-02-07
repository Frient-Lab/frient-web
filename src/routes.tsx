import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeQuiz } from "./pages/HomeQuiz/";
import { Quiz } from "./pages/Quiz";
import { Result } from "./components/Result";
import { FinishQuiz } from "./components/FinishQuiz";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeQuiz />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/finishquiz" element={<FinishQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}
