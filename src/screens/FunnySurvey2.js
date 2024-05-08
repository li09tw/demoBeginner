import { useEffect, useState } from "react";

export default function FunnySurvey2() {
  const [answerGrade, setAnswerGrade] = useState(Number(0));

  /* 每個問題用不同的變數去控制單一問題的分數，每次切換都重新設定，請參照 FunnySurvey */
  const [answerGrade1, setAnswerGrade1] = useState(Number());
  const [answerGrade2, setAnswerGrade2] = useState(Number());
  const [answerGrade3, setAnswerGrade3] = useState(Number());

  useEffect(() => {
    setAnswerGrade(answerGrade1 + answerGrade2 + answerGrade3);
  }, []);

  const btnSubmit = () => {
    /* 得到最終分數 */
    setAnswerGrade(answerGrade1 + answerGrade2 + answerGrade3);
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
                    value={1}
                    name="Q1"
                    onChange={(e) => {
                      setAnswerGrade1(Number(e.target.value));
                    }}
                  />
                  粉紅色
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value={2}
                    name="Q1"
                    onClick={(e) => {
                      setAnswerGrade1(Number(e.target.value));
                    }}
                  />
                  暗色
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value={3}
                    name="Q1"
                    onClick={(e) => {
                      setAnswerGrade1(Number(e.target.value));
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
                    value={5}
                    name="Q2"
                    onClick={(e) => {
                      setAnswerGrade2(Number(e.target.value));
                    }}
                  />
                  舒爽
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value={6}
                    name="Q2"
                    onClick={(e) => {
                      setAnswerGrade2(Number(e.target.value));
                    }}
                  />
                  悶熱
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value={7}
                    name="Q2"
                    onClick={(e) => {
                      setAnswerGrade2(Number(e.target.value));
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
                    value={10}
                    name="Q3"
                    onClick={(e) => {
                      setAnswerGrade3(Number(e.target.value));
                    }}
                  />
                  很Local
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value={20}
                    name="Q3"
                    onClick={(e) => {
                      setAnswerGrade3(Number(e.target.value));
                    }}
                  />
                  很優雅
                </label>
                <label className="Survey-option-style-single">
                  <input
                    type="radio"
                    value={30}
                    name="Q3"
                    onClick={(e) => {
                      setAnswerGrade3(Number(e.target.value));
                    }}
                  />
                  很輕鬆
                </label>
              </div>
            </div>
          </div>
          <div className="middle-middle" style={{ marginBottom: "4rem" }}>
            <button
              type="submit"
              className="Survey-btn-submit"
              onClick={btnSubmit}
            >
              送出
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
