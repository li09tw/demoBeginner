import manager from "./datas/manager.json";
import { useEffect, useState } from "react";

export default function MemberManage() {
  /* 從資料庫拿到的資料 */
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [UserClass, setUserClass] = useState("");

  /* 這個驗證程序理論上應該要在後端較為安全 */
  useEffect(() => {
    if (sessionStorage.getItem("passToken") == manager[0].token) {
      setEmail(manager[0].email);
      setId(manager[0].id);
      setName(manager[0].name);
      setUserClass(manager[0].class);
    } else {
    }
  }, []);

  return (
    <>
      <div>
        <div className="text-Welcome">歡迎回來,{name}</div>
        <div>
          <div className="text-info">編號：{id}</div>
          <div className="text-info">權限：{UserClass}</div>
          <div className="text-info text-info-bottom">email:{email}</div>
        </div>
      </div>
    </>
  );
}
