import React from "react";
import ReactDOM from "react-dom";
import { AnswerProvider } from "./context/AnswerContext";
import Router from "./routes";
import './styles/global.css';

ReactDOM.render(
  <AnswerProvider>
    <Router />
  </AnswerProvider>,
  document.getElementById('root')
)
