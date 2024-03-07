import { useEffect, useState } from "react";
import moment from "moment";
/* import "moment/locale/zh-tw"; */

/* 

https://andyli.tw/date/

1.時間加減法
2.useState 變數
3.https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
4.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
5.link css
6.bitton css
7.{ 變數 ? (動作):（動作） }

*/

export default function DateTime() {
  const [endDate, setEndDate] = useState(
    moment("2024-05-18 08:00", "YYYY-MM-DD hh:mm")
  );
  const [today, setToday] = useState(moment()); /*  new Date()  Javascript  */
  const [leftdays, setleftdays] = useState(
    moment.duration(endDate.diff(today))
  );

  const [months, setMonths] = useState(leftdays.asMonths().toFixed(2));
  const [days, setDays] = useState(leftdays.asDays().toFixed(2));
  const [hours, setHours] = useState(Math.floor(leftdays.asHours()));

  const [Mdisplay, setMDisplay] = useState(false);
  const [Ddisplay, setDDisplay] = useState(false);
  const [Hdisplay, setHDisplay] = useState(false);

  const monthsDisplay = () => {
    setMDisplay(true);
    setDDisplay(false);
    setHDisplay(false);
  };
  const daysDisplay = () => {
    setMDisplay(false);
    setDDisplay(true);
    setHDisplay(false);
  };

  const hoursDisplay = () => {
    setMDisplay(false);
    setDDisplay(false);
    setHDisplay(true);
  };

  return (
    <div className="App">
      <div>
        <h1 className="middle-middle">國中會考 倒數日期</h1>
        <h2 className="middle-middle">
          {String(endDate.locale("zh-tw").format("LLLL"))}
        </h2>
      </div>
      <select></select>
      <div className="middle-middle">
        <h6>點選-&gt; </h6>
        <button onClick={monthsDisplay} className="btn-All btn-date-toggle ">
          <p>顯示幾個月？</p>
        </button>
        <button onClick={daysDisplay} className="btn-All btn-date-toggle ">
          <p>顯示幾天？</p>
        </button>
        <button onClick={hoursDisplay} className="btn-All btn-date-toggle ">
          <p>顯示幾小時？</p>
        </button>
      </div>

      <div className="dateDisplay ">
        <p style={{ marginRight: "1rem" }}>剩</p>

        {Mdisplay ? (
          <>
            <div className="middle-middle ">
              <h3>{months}</h3>
              <h4>月</h4>
            </div>
          </>
        ) : (
          <></>
        )}

        {Ddisplay ? (
          <>
            <div className="middle-middle ">
              <h3>{days}</h3>
              <h4>日</h4>
            </div>
          </>
        ) : (
          <></>
        )}

        {Hdisplay ? (
          <>
            <div className="middle-middle ">
              <h3>{hours}</h3>
              <h4>小時</h4>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

/* 

功課是 尋找至少 2 個日期，設定 月、日、小時 之一作為倒數計算，使用 button 去轉換兩個日期

*/
