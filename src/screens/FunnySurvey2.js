import { useEffect, useState } from "react";

export default function FunnySurvey2() {
  const [answerGrade, setAnswerGrade] = useState(Number(0));

  return (
    <>
      <div className="middle-middle">
        <p>僅提供示範”以分數作為基礎相加的“心裡問卷</p>
      </div>
      <div className="middle-middle">
        <p>分數：{answerGrade}</p>
      </div>
      <div>
        <div className="middle-middle">
          <div className="Survey-question">
            <div className="middle-middle ">
              <p>可以用什麼顏色形容今天的心情呢？</p>
            </div>
            <div className="middle-middle ">
              <label>
                <input
                  type="radio"
                  value="0"
                  name="Q1"
                  onClick={(e) => {
                    const num = Number(answerGrade) + Number(e.target.value);
                    setAnswerGrade(num);
                  }}
                />
                粉紅色
              </label>
              <label>
                <input
                  type="radio"
                  value="1"
                  name="Q1"
                  onClick={(e) => {
                    const num = Number(answerGrade) + Number(e.target.value);
                    setAnswerGrade(num);
                  }}
                />
                暗色
              </label>
              <label>
                <input
                  type="radio"
                  value="2"
                  name="Q1"
                  onClick={(e) => {
                    const num = Number(answerGrade) + Number(e.target.value);
                    setAnswerGrade(num);
                  }}
                />
                綠色
              </label>
            </div>
          </div>
        </div>

        <div className="middle-middle">
          <div className="Survey-question">
            <div className="middle-middle">
              <p>今天的氣溫的感覺是? </p>
            </div>
            <div className="middle-middle">
              <label>
                <input
                  type="radio"
                  value="2"
                  name="Q2"
                  onClick={(e) => {
                    const num = Number(answerGrade) + Number(e.target.value);
                    setAnswerGrade(num);
                  }}
                />
                舒爽
              </label>
              <label>
                <input
                  type="radio"
                  value="4"
                  name="Q2"
                  onClick={(e) => {
                    const num = Number(answerGrade) + Number(e.target.value);
                    setAnswerGrade(num);
                  }}
                />
                悶熱
              </label>
              <label>
                <input
                  type="radio"
                  value="6"
                  name="Q2"
                  onClick={(e) => {
                    const num = Number(answerGrade) + Number(e.target.value);
                    setAnswerGrade(num);
                  }}
                />
                冷
              </label>
            </div>
          </div>
        </div>

        <div className="middle-middle">
          <div className="Survey-question">
            <div className="middle-middle">
              <p>今天的你</p>
            </div>
            <div className="middle-middle">
              <label>
                <input
                  type="radio"
                  value="10"
                  name="Q3"
                  onClick={(e) => {
                    const num = Number(answerGrade) + Number(e.target.value);
                    setAnswerGrade(num);
                  }}
                />
                很Local
              </label>
              <label>
                <input
                  type="radio"
                  value="20"
                  name="Q3"
                  onClick={(e) => {
                    const num = Number(answerGrade) + Number(e.target.value);
                    setAnswerGrade(num);
                  }}
                />
                很優雅
              </label>
              <label>
                <input
                  type="radio"
                  value="30"
                  name="Q3"
                  onClick={(e) => {
                    const num = Number(answerGrade) + Number(e.target.value);
                    setAnswerGrade(num);
                  }}
                />
                很輕鬆
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
