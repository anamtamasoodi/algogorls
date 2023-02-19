import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

// connecting all the pages
import HomePage from "./pages/HomePage";
import GenerationPage from "./pages/GenerationPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/GenerationPage" element={<GenerationPage />} />
      <Route path="/ResultsPage" element={<ResultsPage />} />
<<<<<<< HEAD

=======
>>>>>>> dae30c317b66a29bcd63cad58ba4873cc6c067ce
      </Routes>

    </BrowserRouter>
  );
}

//export default Index
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()