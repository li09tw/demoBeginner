import { useParams } from "react-router-dom";
import answerData from "./datas/answer.json";
import { useEffect, useState } from "react";

export default function FunnySAnswer() {
  let { answerID, nickname } = useParams();
  const [id, setID] = useState("");
  const [srcImg, setsrcImg] = useState(answerData[answerID].src);
  const [srcAddress, setsrcAddress] = useState(answerData[answerID].link);
  const [imgName, setImgName] = useState(answerData[answerID].img);

  const grabData = () => {};

  useEffect(() => {
    grabData();
  }, []);

  return (
    <>
      <div className="">
        <section className="Survey-answer-section1">
          <div className="middle-middle">
            <img
              className="Survey-img"
              src={require(`${srcImg}`)}
              alt={imgName}
            />
          </div>
          <div className="middle-middle">
            <a href={srcAddress}>
              <p className="img-link-p">點此進入圖片來源</p>
            </a>
          </div>
        </section>

        <section className="middle-middle">
          <p>
            嗨，{nickname}，看來你今天需要一塊可口的{imgName}
          </p>
        </section>
        <section></section>
      </div>
    </>
  );
}
