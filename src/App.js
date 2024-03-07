import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DateTime from "./screens/DateTime";
import FunnySurvey from "./screens/FunnySurvey";
import FunnySAnswer from "./screens/FunnySAnswer";
import FunnySurvey2 from "./screens/FunnySurvey2";

/* 
Router
html tag div, p, section,  https://developer.mozilla.org/en-US/docs/Web/HTML & pchome
*/

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <section className="app-header  ">
            {/* --------Header  導覽、聯絡我們（自媒體）------ */}
            <p className="middle-middle "> Start your project </p>
            <div className="header-link-group">
              <Link to="DateTime" className="link-all header-link">
                Date and Time
              </Link>
              <Link to="FunnySurvey" className="link-all header-link">
                Funny Survey
              </Link>
              <Link to="FunnySurvey2" className="link-all header-link">
                Funny Survey 2
              </Link>
            </div>
          </section>
          <section className="app-body ">
            {/* --------body  展示區域------ */}
            <Routes>
              <Route path="/DateTime" element={<DateTime />} />
              <Route path="/FunnySurvey" element={<FunnySurvey />} />
              <Route path="/FunnySurvey2" element={<FunnySurvey2 />} />
              <Route
                path="/FunnySAnswer/:answerID/:nickname"
                element={<FunnySAnswer />}
              />
            </Routes>
          </section>
          <section className="app-footer middle-middle">
            {/* --------footer  隱私權、著作權聲明、聯絡我們（商城）------ */}
            <p className="footer-p">This is footer</p>
          </section>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
