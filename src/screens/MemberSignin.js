import { useState, useContext } from "react";
import manager from "./datas/manager.json";
import { useNavigate } from "react-router-dom";
import { Context } from "../components/Context";

export default function MemberSignin() {
  const [User, setUser] = useState("");
  const [Pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  /* 跳轉畫面 */
  const navigate = useNavigate();

  /* 登入工具 */
  const { setAuthState } = useContext(Context);
  const btnSubmit = () => {
    /* ! 非資料庫  */
    if (User == manager[0].user || User == manager[1].user) {
      if (Pass == manager[0].password) {
        sessionStorage.setItem("passToken", manager[0].token);
        console.log(manager[0].token);
        /* token的資料內容可以自行設定 */
        setAuthState({
          status: true,
          id: manager[0].id,
          name: manager[0].name,
        });
        navigate("/Member");
      } else {
        setMessage("帳號或密碼不正確");
      }
    } else {
      setMessage("帳號或密碼不正確");
    }
  };

  return (
    <>
      <div>
        <div className="middle-middle">登入測試</div>
        <div>
          <div className="signintest">帳號：SampleSignIn</div>
          <div className="signintest">密碼：Password</div>
        </div>
        <form>
          <div>
            <label>帳號：</label>
            <input
              className="signin-input"
              type="text"
              placeholder="帳號至少為8位數"
              minLength={8}
              size={20}
              required
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div>
            <label>密碼：</label>
            <input
              className="signin-input"
              type="password"
              placeholder="密碼至少為8位數"
              minLength={8}
              size={30}
              required
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <div className="middle-middle">
            <button type="submit" className="signin-button" onClick={btnSubmit}>
              送出
            </button>
          </div>
        </form>
        <div className="signin-err-message">{message}</div>
      </div>
    </>
  );
}
