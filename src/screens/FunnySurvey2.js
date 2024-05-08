import { useEffect, useState } from "react";

export default function FunnySurvey2() {
  const [answerGrade, setAnswerGrade] = useState(Number(0));

  /* 每個問題用不同的變數去控制單一問題的分數，每次切換都重新設定，請參照 FunnySurvey */
  const [answerGrade1, setAnswerGrade1] = useState(Number(0));
  const [answerGrade2, setAnswerGrade2] = useState(Number(0));
  const [answerGrade3, setAnswerGrade3] = useState(Number(0));

  const btnSubmit = () => {
    /* 得到最終分數 */
  };

  return (
    <>
      <div>
        <div style={{ marginTop: "1rem" }}>
          <p className="middle-middle Survey-option-style">
            僅提供示範”以分數作為基礎相加的“心裡問卷
          </p>
          <p className="middle-middle Survey-option-style">
            分數避免同一問題重複計分的解法在教學裡
          </p>
        </div>
        <div className="middle-middle Survey-option-style">
          <p>分數：{answerGrade}</p>
        </div>
        <div>
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
                    onClick={(e) => {
                      setAnswerGrade1(1);
                      setAnswerGrade(
                        answerGrade1 + answerGrade2 + answerGrade3
                      );
                    }}
                  />
                  粉紅色
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value="2"
                    name="Q1"
                    onClick={(e) => {
                      setAnswerGrade1(2);
                      setAnswerGrade(
                        answerGrade1 + answerGrade2 + answerGrade3
                      );
                    }}
                  />
                  暗色
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value="3"
                    name="Q1"
                    onClick={(e) => {
                      setAnswerGrade1(3);
                      setAnswerGrade(
                        answerGrade1 + answerGrade2 + answerGrade3
                      );
                    }}
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
                  <input
                    type="radio"
                    value="5"
                    name="Q2"
                    onClick={(e) => {
                      setAnswerGrade2(5);
                      setAnswerGrade(
                        answerGrade1 + answerGrade2 + answerGrade3
                      );
                    }}
                  />
                  舒爽
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value="6"
                    name="Q2"
                    onClick={(e) => {
                      setAnswerGrade2(6);
                      setAnswerGrade(
                        answerGrade1 + answerGrade2 + answerGrade3
                      );
                    }}
                  />
                  悶熱
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value="7"
                    name="Q2"
                    onClick={(e) => {
                      setAnswerGrade2(7);
                      setAnswerGrade(
                        answerGrade1 + answerGrade2 + answerGrade3
                      );
                    }}
                  />
                  冷
                </label>
              </div>
            </div>
          </div>

          <div className="middle-middle" style={{ marginBottom: "4rem" }}>
            <div className="Survey-question">
              <div className="middle-middle Survey-option-style">
                <p>今天的你</p>
              </div>
              <div className="middle-middle Survey-option-style">
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value="10"
                    name="Q3"
                    onClick={(e) => {
                      setAnswerGrade3(10);
                      setAnswerGrade(
                        answerGrade1 + answerGrade2 + answerGrade3
                      );
                    }}
                  />
                  很Local
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value="20"
                    name="Q3"
                    onClick={(e) => {
                      setAnswerGrade3(20);
                      setAnswerGrade(
                        answerGrade1 + answerGrade2 + answerGrade3
                      );
                    }}
                  />
                  很優雅
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value="30"
                    name="Q3"
                    onClick={(e) => {
                      setAnswerGrade3(30);
                      setAnswerGrade(
                        answerGrade1 + answerGrade2 + answerGrade3
                      );
                    }}
                  />
                  很輕鬆
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
