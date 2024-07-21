import React from "react";
import { Row, Col, Typography, Image } from "antd";

const Smt: React.FC = () => {
  const activeCount = 6;
  const completedCount = 2;

  const colors = ["#f0b90b", "#526d82", "#9db2bf", "#1569ee", "#e00000"];

  const renderEntries = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <div key={index}>
        <Row
          style={{
            backgroundColor: "#14243a",
            padding: "12px",
            border: "none",
            borderRadius: "1rem",
            marginBottom: "2%",
            boxShadow: "0 6px 12px rgba(255, 255, 255, 0.2)",
          }}
        >
          <Col
            span={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="list-div"
              style={{ backgroundColor: colors[index % colors.length] }}
            ></div>
          </Col>
          <Col span={16}>
            <Row>
              <Col span={24}>
                <Row>
                  <Col span={24}>
                    <Typography
                      style={{ textAlign: "start" }}
                      className="airdrops-text"
                    >
                      $ SMT
                    </Typography>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Typography
                  style={{ fontWeight: "400", textAlign: "start" }}
                  className="airdrops-text"
                >
                  AVAILABLE REWARDS:
                </Typography>
              </Col>
              <Col span={24}>
                <Row>
                  <Col span={2}>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 37 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.1732 20.4953L26.624 18.0793C25.9261 17.882 25.5303 17.1482 25.7515 16.4616L29.8281 3.80628C30.4411 3.00748 30.4217 1.86223 29.7258 1.07862C28.9346 0.18863 27.5696 0.102647 26.6768 0.887489L1.21578 23.28C0.323131 24.0651 0.240895 25.4237 1.03198 26.3144C1.31258 26.6311 1.68072 26.8586 2.09018 26.9682C2.16474 26.9882 2.24039 27.0025 2.31636 27.0145C2.3885 27.0423 2.46238 27.0671 2.53881 27.0876L8.94142 28.8032C9.71894 29.0115 10.1148 29.8732 9.76364 30.5927L3.21975 44.0054C2.50032 44.7586 2.41805 45.9419 3.07657 46.7938C3.36554 47.1688 3.77071 47.4385 4.22901 47.561C4.85634 47.7291 5.55188 47.615 6.10577 47.1913L35.7891 24.4868C36.0627 24.2776 36.2814 24.0057 36.4267 23.6941C36.529 23.5286 36.6119 23.3474 36.6673 23.151C36.9905 22.0088 36.3214 20.8199 35.1732 20.4953Z"
                        fill="url(#paint0_linear_1_472)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_472"
                          x1="25.1171"
                          y1="-0.526313"
                          x2="25.1171"
                          y2="36.0564"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F7C243" />
                          <stop offset="1" stop-color="#FD902B" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Col>
                  <Col
                    span={22}
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <Typography className="taps-left-value">1000</Typography>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            span={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="list-expand-div">
              <svg
                width="18"
                height="18"
                viewBox="0 0 41 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.03201 0.0168228H38.5871C38.9572 0.0180626 39.32 0.127056 39.6364 0.332077C39.9528 0.537098 40.2109 0.830378 40.3828 1.18035C40.5547 1.53032 40.634 1.92373 40.6121 2.31824C40.5902 2.71274 40.468 3.0934 40.2585 3.41924L21.981 31.6101C21.2235 32.7789 19.3998 32.7789 18.6402 31.6101L0.362655 3.41924C0.151092 3.09408 0.0270262 2.71323 0.00393765 2.31807C-0.0191509 1.92291 0.0596207 1.52855 0.231694 1.17783C0.403767 0.82712 0.662561 0.533464 0.979958 0.328777C1.29735 0.124088 1.66122 0.016201 2.03201 0.0168228Z"
                  fill="#9DB2BF"
                />
              </svg>
            </div>
          </Col>
        </Row>
      </div>
    ));
  };

  return (
    <div className="main-container smt-main-container-background">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(19,35,56,1) 0%, rgba(91,128,179,1) 85%)",
          width: "100%",
          height: "max-content",
          border: "0.5px solid #ffffff",
          borderRadius: "1rem",
          padding: "12px",
        }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2%",
          }}
        >
          <svg
          style={{marginRight:"1%"}}
            width="20"
            height="20"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.8882 21.1572C60.7881 12.0173 52.4098 5.15027 42.75 1.97064C47.1507 6.73404 50.2941 14.133 50.2941 23.2125H53.6913L39.5946 38.8688C39.2923 38.7963 39.0143 38.6875 38.6878 38.6875H32.8847V23.2125H46.4253C46.4253 9.285 38.0954 0 30.9503 0C23.8052 0 15.4753 9.285 15.4753 23.2125H29.016V38.6875H23.2128C22.8864 38.6875 22.6083 38.7963 22.3061 38.8688L8.20933 23.2125H11.6066C11.6066 14.133 14.7499 6.73404 19.1506 1.97064C9.49085 5.16236 1.11259 12.0294 0.0124118 21.1572C-0.120576 22.2574 0.834521 23.2125 1.94679 23.2125H2.9986L19.5254 41.577C19.4408 41.8913 19.332 42.2056 19.332 42.5563V58.0312C19.332 60.1712 21.0608 61.9 23.2007 61.9H38.6757C40.8156 61.9 42.5445 60.1712 42.5445 58.0312V42.5563C42.5445 42.2056 42.4357 41.9034 42.351 41.577L58.89 23.2125H59.9418C61.0661 23.2125 62.0212 22.2695 61.8882 21.1572Z"
              fill="#DDE6ED"
            />
          </svg>
          <Typography className="airdrops-text">AIRDROPS</Typography>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2%",
          }}
        >
          <Typography className="airdrops-text">ACTIVE AIRDROPS</Typography>
        </Row>
        {renderEntries(activeCount)}
        <Row>
          <Image src="/assets/Group 882.png" style={{ width: "80%" }} />
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2% 0 2% 0",
          }}
        >
          <Typography className="airdrops-text">COMPLETED AIRDROPS</Typography>
        </Row>
        {renderEntries(completedCount)}
      </div>
    </div>
  );
};

export default Smt;
