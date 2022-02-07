import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
import { Result } from "./components/Result";
import { FinishQuiz } from "./components/FinishQuiz";
import { Filter } from "./pages/Filter";
import { Chat } from "./pages/Chat";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/finishquiz" element={<FinishQuiz />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
