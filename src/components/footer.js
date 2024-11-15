import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#050816" ,cursor:"default"}}>
      <a
        target="_blank"
        href="https://github.com/Sachinshekharpatel/portfolioSachinMain"
        className="link footer__link"
        style={{ color: "#9CA3AF", fontFamily: "Poppins", fontSize: "19px" }}
      >
        Created By Sachin Shekhar Patel
      </a>
      <div class="footer__container">
        <div class="footer__section">
          <h3 class="footer__title" style={{ color: "#fff" }}>
            About
          </h3>
          <p
            class="footer__desc"
            style={{
              color: "#9CA3AF",
              fontFamily: "Poppins",
              fontSize: "19px",
            }}
          >
            <p className="section-description">
              Passionate{" "}
              <span className="text-blue">frontend React developer</span> with a
              keen eye for detail and a love for creating{" "}
              <span className="highlight">beautiful user interfaces</span>.
            </p>
          </p>
        </div>

        <div class="footer__section">
          <h3 class="footer__title" style={{ color: "#fff" }}>
            Contact
          </h3>
          <ul class="footer__list">
            <li>
              <a
                target="_blank"
                aria-label="Email"
                className="link link--icon"
                href={`mailto:heroft7024@gmail.com`}
                style={{
                    transition: "box-shadow 0.3s ease, transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 15px #9CA3AF";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
            >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2.5em"
                  width="2.5em"
                >
                  <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                aria-label="Whatsapp"
                className="link link--icon"
                href="https://api.whatsapp.com/send?phone=6263877374"
                style={{
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 15px #25D366";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <svg
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  height="2.5em"
                  width="2.5em"
                >
                  <path d="M22 6.55a12.61 12.61 0 00-.1-1.29 4.29 4.29 0 00-.37-1.08 3.66 3.66 0 00-.71-1 3.91 3.91 0 00-1-.71 4.28 4.28 0 00-1.08-.36A10.21 10.21 0 0017.46 2H6.55a12.61 12.61 0 00-1.29.1 4.29 4.29 0 00-1.08.37 3.66 3.66 0 00-1 .71 3.91 3.91 0 00-.71 1 4.28 4.28 0 00-.36 1.08A10.21 10.21 0 002 6.54V17.45a12.61 12.61 0 00.1 1.29 4.29 4.29 0 00.37 1.08 3.66 3.66 0 00.71 1 3.91 3.91 0 001 .71 4.28 4.28 0 001.08.36 10.21 10.21 0 001.28.11h10.91a12.61 12.61 0 001.29-.1 4.29 4.29 0 001.08-.37 3.66 3.66 0 001-.71 3.91 3.91 0 00.71-1 4.28 4.28 0 00.36-1.08 10.21 10.21 0 00.11-1.28V7.08v-.53zM12.23 19a7.12 7.12 0 01-3.43-.9l-3.8 1 1-3.72a7.11 7.11 0 01-1-3.58 7.18 7.18 0 117.23 7.2zm0-13.13A6 6 0 007.18 15l.14.23-.6 2.19L9 16.8l.22.13a6 6 0 003 .83 6 6 0 006-6 6 6 0 00-6-6zm3.5 8.52a1.82 1.82 0 01-1.21.85 2.33 2.33 0 01-1.12-.07 8.9 8.9 0 01-1-.38 8 8 0 01-3.06-2.7 3.48 3.48 0 01-.73-1.85 2 2 0 01.63-1.5.65.65 0 01.48-.22H10c.11 0 .26 0 .4.31s.51 1.24.56 1.33a.34.34 0 010 .31 1.14 1.14 0 01-.18.3c-.09.11-.19.24-.27.32s-.18.18-.08.36a5.56 5.56 0 001 1.24 5 5 0 001.44.89c.18.09.29.08.39 0s.45-.52.57-.7.24-.15.4-.09 1.05.49 1.23.58.29.13.34.21a1.56 1.56 0 01-.07.78z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sachin-shekhar-patel-04b47a239/"
                aria-label="linkedin"
                className="link link--icon"
                style={{
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 15px #014468";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="2.5em"
                  height="2.5em"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                aria-label="Whatsapp"
                className="link link--icon"
                href="https://github.com/Sachinshekharpatel/portfolioSachinMain"
                style={{
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 15px #fff";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2.5em"
                  width="2.5em"
                >
                  <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; Sachin Shekhar Patel . All rights reserved. 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
