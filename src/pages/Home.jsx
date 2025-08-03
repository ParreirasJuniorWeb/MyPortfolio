import "./Home.css";

import { Link } from "react-scroll";

import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import foto_home from "../img/20230723_024034722_iOS-removebg-preview (2).png";

import { ThreeCircles } from "react-loader-spinner";
import { useEffect, useState } from "react";

const Home = () => {
  // Imagem Loader

  const [removeLoading, setRemoveLoading] = useState(false); //Loading

  useEffect(() => {
    setTimeout(() => {
      setRemoveLoading(true);
    }, 300);
  }, []);

  // function loader() {
  //     if(window.onload === true)
  //         document.querySelector('.loader-container').classList.add('fade-out');
  //     }
  //       function fadeOut() {
  //         window.setInterval(loader, 3000);
  //       }

  //       window.onload = fadeOut;

  //   setTimeout(() => {
  //     console.log("this is the first message");
  //   }, 5000);
  //   setTimeout(() => {
  //     console.log("this is the second message");
  //   }, 3000);
  //   setTimeout(() => {
  //     console.log("this is the third message");
  //   }, 1000);

  //   var intervalID = window.setInterval(myCallback, 3000);

  // function myCallback() {
  //   console.log("I'm here!");
  // }

  // Animation of showing sections

  window.onscroll = () => {
    document.querySelectorAll("section").forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      // let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        //active navbar links on-scroll

        // document.querySelectorAll('header nav a').forEach(Links => {
        //     Links.classList.remove('active');
        //     document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        // })

        // active sections for animation on scroll
        sec.classList.add("show-animate");
      }
      // if you want to use animation that repeats on scroll use this
      else {
        sec.classList.remove("show-animate");
      }
    });
  };

  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, I'm <span>João Victor</span>
            <span className="animate" id="animate_name_timer"></span>
          </h1>
          <div className="text-animate">
            <h3>Frontend Developer</h3>
            <span className="animate" id="animate_text_timer"></span>
          </div>
          <p style={{ fontSize: "1.2rem" }}>
            Técnico em Informática e graduando em Análise e Desenvolvimento de
            Sistemas, com experiência prática em suporte técnico, infraestrutura
            de redes, manutenção de equipamentos, administração de sistemas
            operacionais e plataformas corporativas. Atuação destacada na
            Secretaria de Estado de Saúde de Minas Gerais (SES-MG), com foco em
            resolução de problemas, segurança da informação e eficiência em
            ambientes corporativos. Perfil proativo, com interesse em inovação,
            tecnologias em nuvem e desenvolvimento web.
            <span className="animate" id="animate_paragrafo_timer"></span>
          </p>

          <div className="btn-box">
            <Link
              to="education"
              className="btn"
              spy={true}
              smooth={true}
              offset={-2}
              duration={500}
            >
              Hire Me
            </Link>
            <Link
              to="contact"
              className="btn"
              spy={true}
              smooth={true}
              offset={-2}
              duration={500}
            >
              Let's Talk
            </Link>
            <span className="animate" id="animate_btns_timer"></span>
          </div>
        </div>

        <div className="home-sci">
          <a
            href="https://wa.me/5531992396360?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20trabalhos.%20Podemos%20conversar%20via%20WhatsApp?%20Sou...%20e%20estou%20interessado%20em%20contratar%20os%20seus%20serviços."
            target="_blank"
            className="social-links"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:joaoparreiras2020@gmail.com"
            target="_blank"
            className="social-links"
          >
            <MdOutlineEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/jvparreiras"
            target="_blank"
            className="social-links"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/ParreirasJuniorWeb"
            target="_blank"
            className="social-links"
          >
            <FaGithub />
          </a>
          <span className="animate" id="animate_social_btns_timer"></span>
        </div>

        <div className="img_home">
          <img src={foto_home} />
          <span className="animate animate_homeImg_timer home-img"></span>
        </div>

        <div className="home-imgHover"></div>
        <span className="animate animate_homeImg_timer home-img"></span>
      </section>

      {!removeLoading && (
        <div className="loader-container">
          <ThreeCircles
            visible={true}
            height="400"
            width="400"
            color="#00abf0"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass="loading"
          />
        </div>
      )}
    </>
  );
};

export default Home;
