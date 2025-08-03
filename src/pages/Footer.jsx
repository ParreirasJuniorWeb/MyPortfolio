import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <span className="animate animate_navLinks_timer"></span>
      <div className="footer-text">
        <p>
          Copyright &copy; 2024 by João Victor P. Soares | All Rights Reserved.
        </p>
        <p>Web Design by João Victor P. Soares</p>
        <small>
          WhatsApp:
          <a
            href="https://wa.me/5531992396360?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20trabalhos.%20Podemos%20conversar%20via%20WhatsApp?%20Sou...%20e%20estou%20interessado%20em%20contratar%20os%20seus%20serviços."
            target="_blank"
            style={{ color: "#fff" }}
          >
            {" "}
            +55 (31) 992396360
          </a>
        </small>
        <br />
        <small>
          E-mail:{" "}
          <a
            href="mailto:joaoparreiras2020@gmail.com"
            target="_blank"
            style={{ color: "#fff" }}
          >
            joaoparreiras2020@gmail.com
          </a>
        </small>
      </div>

      <div className="footer-iconTop">
        <FaArrowUp
          onClick={() => {
            document.getElementById("home").scrollIntoView();
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
