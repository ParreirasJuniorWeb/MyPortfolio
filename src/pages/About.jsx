import "./About.css";

import foto_about from "../img/foto_perfil_portfolio_1-removebg-preview";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
        <span className="animate animate_aboutHeading_timer"></span>
      </h2>

      <div className="about-img">
        <img src={foto_about} />
        <span className="circle-spiner"></span>
        <span className="animate animate_aboutImg_timer"></span>
      </div>

      <div className="about-content">
        <h3>
          Técnico em Informática | Estagiário em TI na SES-MG | Graduando em
          Análise e Desenvolvimento de Sistemas | Entusiasta de Cloud e
          Desenvolvimento Web.
          <span className="animate animate_aboutTitle_timer"></span>
        </h3>
        <p>
          Técnico em Informática com experiência prática em suporte técnico,
          manutenção de equipamentos, redes e infraestrutura. Atualmente
          estagiando na Secretaria de Estado de Saúde de Minas Gerais (SES-MG),
          atuando com Windows 10/11, Microsoft 365, Active Directory e suporte
          de TI corporativo. Cursando Análise e Desenvolvimento de Sistemas,
          desenvolvendo projetos com HTML, CSS, JavaScript, React Native,
          Node.js e PHP. Tenho interesse em soluções em nuvem (AWS),
          desenvolvimento web e suporte de TI com foco em performance, automação
          e segurança. Apaixonado por tecnologia, busco constantemente aprender,
          aplicar boas práticas e crescer na área de tecnologia da informação.
          <br />
          Experiência em Técnico em Informática (Estágio) Secretaria de Estado
          de Saúde de Minas Gerais (SES-MG) jan/2024 – atual 📍 Belo Horizonte,
          MG Suporte técnico aos usuários da Superintendência e Assessoria de TI
          Instalação e configuração de Windows 10/11 Professional Gerenciamento
          de contas e permissões via Active Directory Administração de Microsoft
          365 e Admin Center Manutenção preventiva e corretiva de hardware,
          software e ativos de rede Colaborei com a padronização de
          procedimentos e melhoria no tempo de resposta aos chamados Resultados:
          ✅ Redução de 40% no tempo de entrega de máquinas formatadas ✅
          Melhoria na organização e controle de acessos da rede corporativa.
          <span className="animate animate_aboutText_timer"></span>
        </p>

        <div className="btn-box btns">
          <a
            href="https://www.linkedin.com/in/jvparreiras"
            target="_blank"
            className="btn"
          >
            Read More<span className="animate animate_aboutText_timer"></span>
          </a>
          <br />
          <br />
          <a
            href="https://github.com/ParreirasJuniorWeb?tab=repositories"
            target="_blank"
            className="btn"
          >
            Repositório GitHub
            <span className="animate animate_aboutText_timer"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
