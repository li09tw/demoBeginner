/* 
1.
問卷公司
https://www.surveymonkey.com/

SMTP
https://www.mailersend.com/compare/mailgun-alternative?source=google&medium=cpc&campaign=MS_ANZ_alt%20-%20Mailgun&content=Alt%20-%20Mailgun%20DSA&term=&ml_campaignid=14919528424&ml_adsetid=129599664138&gad_source=1&gclid=CjwKCAiA6KWvBhAREiwAFPZM7pSAgk8uLXgVZzwcqql5aKexoY5rYvrY5ZO8vblzRlc-MLtKlQWM1xoC-3AQAvD_BwE  

NoSQL MySQL

完全免費的方式就是線下
*/

import photoCompany from "./imgs/公司.jpeg";

export default function ContactUs() {
  return (
    <>
      <div className="middle-middle ">
        <h2>聯繫我們</h2>
      </div>
      <div className="middle-middle ">
        <section className="Contact-info-section">
          <div className="middle-middle ">
            <a href="https://www.travel.taipei/zh-cn/attraction/details/19">
              <img src={photoCompany} alt="故宮" />
            </a>
          </div>
          <div className="middle-middle ">
            <p className="img-link-p"> 圖片來源:故宮</p>
          </div>
        </section>
        <section className="Contact-info-section">
          <div style={{ marginBottom: "1rem" }}>
            <div className="middle-middle ">
              <p className="contact-link">聯繫電話：</p>
              <a href="tel:+886.123456789" className="contact-link">
                +886 123456789
              </a>
            </div>
            <div className="middle-middle ">
              <p className="contact-link">(僅供參考，用手機點選後撥號)</p>
            </div>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <div className="middle-middle ">
              <p className="contact-link">服務信箱：</p>
              <a href="mailto:demo@gmail.com" className="contact-link">
                demo@gmail.com
              </a>
            </div>
            <div className="middle-middle ">
              <p className="contact-link">(僅供參考，點選後出現郵箱服務)</p>
            </div>
          </div>{" "}
          <div style={{ marginBottom: "1rem" }}>
            <div className="middle-middle ">
              <p className="contact-link">公司地址：</p>
            </div>
            <div className="middle-middle ">
              <p className="contact-link">桃園市幸福區仁義路123號</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
