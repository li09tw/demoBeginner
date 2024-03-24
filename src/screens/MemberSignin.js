import { useState } from "react";
import manager from "./datas/manager.json";
import { useNavigate } from "react-router-dom";

export default function MemberSignin() {
  const [Acc, setAcc] = useState("");
  const [Pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const btnSubmit = () => {
    /* ! 非資料庫  */
    if (Acc == manager[0].id) {
      if (Pass == manager[0].key) {
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
        <div className="middle-middle">管理者登入</div>
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
                setAcc(e.target.value);
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
