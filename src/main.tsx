import ReactDOM from "react-dom";
import { AnswerProvider } from "./context/AnswerContext";
import { QuizProvider } from "./context/QuizContext";
import Router from "./routes";
import './styles/global.css';

ReactDOM.render(
  <AnswerProvider>
    <QuizProvider>
      <Router />
    </QuizProvider>
  </AnswerProvider>,
  document.getElementById('root')
)
