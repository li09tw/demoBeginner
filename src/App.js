import "./App.css";
import "./App-mini.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DateTime from "./screens/DateTime";
import FunnySurvey from "./screens/FunnySurvey";
import FunnySAnswer from "./screens/FunnySAnswer";
import FunnySurvey2 from "./screens/FunnySurvey2";
import ContactUs from "./screens/ContactUs";
import MemberManage from "./screens/MemberManage";
import MemberSignin from "./screens/MemberSignin";
import Home from "./screens/Home";
import { useState, useEffect } from "react";

/* 
Router
html tag div, p, section,  https://developer.mozilla.org/en-US/docs/Web/HTML & pchome
*/

function App() {
  const [surveyDisplay, setSurveyDisplay] = useState(false);

  /* 響應式網頁輔助工具 */
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <section className="app-header">
            <div className="nav-display-L">
              <div className="nav-logo">{width}</div>
            </div>

            <div className="nav-display-R">
              <div className="header-link-group">
                <Link to="/Signin" className="link-all header-signin-link">
                  登入
                </Link>
                <Link to="/" className="link-all header-link">
                  首頁
                </Link>
                <Link to="/DateTime" className="link-all header-link">
                  學測倒數
                </Link>
                <div
                  className="link-all header-link"
                  onMouseOver={() => {
                    setSurveyDisplay(true);
                  }}
                  onMouseLeave={() => {
                    setSurveyDisplay(false);
                  }}
                >
                  趣味問卷
                  {surveyDisplay ? (
                    <>
                      <div className="header-link-sub">
                        <div className="link-all ">
                          <Link to="/FunnySurvey">選擇型</Link>
                        </div>
                        <div className="link-all">
                          <Link to="/FunnySurvey2">分數型</Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="app-body">
            {/* --------body  展示區域------ */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Signin" element={<MemberSignin />} />
              <Route path="/Member" element={<MemberManage />} />
              <Route path="/DateTime" element={<DateTime />} />
              <Route path="/FunnySurvey" element={<FunnySurvey />} />
              <Route path="/FunnySurvey2" element={<FunnySurvey2 />} />
              <Route
                path="/FunnySAnswer/:answerID/:nickname"
                element={<FunnySAnswer />}
              />
              <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
          </section>
          <section className="app-footer">
            {/* --------footer  隱私權、著作權聲明、聯絡我們（商城）------ */}
            <div>
              <Link to="/ContactUs" className="link-all footer-p ">
                聯繫我們
              </Link>
              <p className="link-all footer-p ">隱私權聲明（cookies）</p>
            </div>
            <div>
              <p className="footer-p "> 著作權©2024 Zora Li </p>
            </div>
          </section>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
