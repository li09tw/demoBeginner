import { useEffect, useState } from "react";
import answerData from "./datas/answer.json";
import { useNavigate } from "react-router-dom";

/* 

1.https://react.dev/reference/react-dom/components/select
2.https://react.dev/reference/react-dom/components/input
3.if-else

*/

export default function FunnySurvey() {
  const navigate = useNavigate();
  const [modeSwitch, setModeSwitch] = useState("");

  const [nickname, setNickname] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer3, setAnswer3] = useState("");

  const [MultiTexts, setMultiTexts] = useState("");

  const btnSubmitSurvey = () => {
    /* 先確認模式 */
    /* 確認答案 */
    /*     if (answer1 == "pink" && answer3 == "local") {
    } else if (answer1 == "pink" && answer3 == "elegant") {
    } else if (answer1 == "pink" && answer3 == "casual") {
    } else if (answer1 == "brown" && answer3 == "casual") {
    } else if (answer1 == "brown" && answer3 == "elegant") {
    } else if (answer1 == "brown" && answer3 == "local") {
    } else if (answer1 == "green" && answer3 == "local") {
    } else if (answer1 == "green" && answer3 == "casual") {
    } else if (answer1 == "green" && answer3 == "elegant") {
    } */

    if (modeSwitch == "selected") {
      if (nickname < 3 || answer1 < 1 || answer3 < 1) {
        navigate("FunnySurvey");
      } else {
        answerData.map((el, key) => {
          /*       console.log(key);
      console.log(el); */
          const finalID = answer1 + answer3;
          if (el.id == finalID) {
            /*  console.log("found" + key); */

            /* 最後傳送出去答案對應的資料編號 */
            /*    navigate("/DateTime"); */
            navigate(`/FunnySAnswer/${key}/${nickname}`);
          }
        });
      }
    } else {
      if (nickname < 3) {
        navigate("FunnySurvey");
      } else {
        const randomNumber = Math.floor(Math.random() * (8 - 0) + 0);
        navigate(`/FunnySAnswer/${randomNumber}/${nickname}`);
      }
    }
  };

  return (
    <>
      <div>
        <section>
          <div className="middle-middle">
            <p className="Survey-title-01">今天的你是什麼甜點？</p>
          </div>
          <div>
            <div className="middle-middle Survey-inputText">
              <label> 大名： </label>
              <input
                className="Survey-inputText-style"
                type="text"
                required
                minLength="3"
                maxLength="50"
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
            </div>
            <div className="middle-middle Survey-inputText">
              <label>Email 填入示範： </label>
              <input
                type="email"
                className="Survey-inputText-style"
                placeholder="此資料不送出任何地方，僅提供觀用"
                pattern=".+@example\.com"
                size="50"
                required
              />
            </div>
            <div className="middle-middle">
              <label>
                請選擇模式：
                <select
                  onChange={(e) => {
                    setModeSwitch(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="free">隨機模式</option>
                  <option value="selected">相關模式</option>
                </select>
              </label>
            </div>
            <div className="middle-middle">
              <div className="Survey-question">
                <div className="middle-middle Survey-option-style">
                  <p>可以用什麼顏色形容今天的心情呢？</p>
                </div>
                <div className="middle-middle Survey-option-style">
                  <label className="Survey-option-style-single">
                    <input
                      type="radio"
                      value="1"
                      name="Q1"
                      onClick={(e) => setAnswer1(e.target.value)}
                    />
                    粉紅色
                  </label>
                  <label className="Survey-option-style-single">
                    <input
                      type="radio"
                      value="2"
                      name="Q1"
                      onClick={(e) => setAnswer1(e.target.value)}
                    />
                    暗色
                  </label>
                  <label className="Survey-option-style-single">
                    <input
                      type="radio"
                      value="3"
                      name="Q1"
                      onClick={(e) => setAnswer1(e.target.value)}
                    />
                    綠色
                  </label>
                </div>
              </div>
            </div>
            <div className="middle-middle">
              <div className="Survey-question">
                <div className="middle-middle Survey-option-style">
                  <p>今天的氣溫的感覺是? </p>
                </div>
                <div className="middle-middle Survey-option-style">
                  <label className="Survey-option-style-single">
                    <input type="radio" value="cool" name="Q2" />
                    舒爽
                  </label>
                  <label className="Survey-option-style-single">
                    <input type="radio" value="hot" name="Q2" />
                    悶熱
                  </label>
                  <label className="Survey-option-style-single">
                    <input type="radio" value="cold" name="Q2" />冷
                  </label>
                </div>
              </div>
            </div>
            <div className="middle-middle">
              <div className="Survey-question ">
                <div className="middle-middle Survey-option-style">
                  <p>今天的你</p>
                </div>
                <div className="middle-middle Survey-option-style">
                  <label className="Survey-option-style-single">
                    <input
                      type="radio"
                      value="1"
                      name="Q3"
                      onClick={(e) => setAnswer3(e.target.value)}
                    />
                    很Local
                  </label>
                  <label className="Survey-option-style-single">
                    <input
                      type="radio"
                      value="2"
                      name="Q3"
                      onClick={(e) => setAnswer3(e.target.value)}
                    />
                    很優雅
                  </label>
                  <label className="Survey-option-style-single">
                    <input
                      type="radio"
                      value="3"
                      name="Q3"
                      onClick={(e) => setAnswer3(e.target.value)}
                    />
                    很輕鬆
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Survey-multiTexts">
          <div>
            <div className="middle-middle ">
              <textarea
                rows="10"
                cols="33"
                required
                placeholder="此為示範「多行文字」區域，請輸入內容，內容不會被送出任何地方"
                onChange={(e) => {
                  setMultiTexts(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="middle-middle ">
              <p>{MultiTexts}</p>
            </div>
          </div>
        </section>
        <div className="middle-middle" style={{ marginBottom: "4rem" }}>
          <button
            type="submit"
            className="Survey-btn-submit"
            onClick={btnSubmitSurvey}
          >
            送出
          </button>
        </div>
      </div>
    </>
  );
}
