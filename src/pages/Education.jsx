import "./Education.css";

import { FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">
        My <span>Journey</span>
        <span className="animate animate_aboutHeading_timer"></span>
      </h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="title">
            Education<span className="animate .animate_aboutTitle_timer"></span>
          </h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2023-2026
                </div>
                <h3>Centro Universitário Estácio de Sá</h3>
                <p>Análise e Desenvolvimento de Sistemas</p>
                <small>jul/2026 – em andamento</small>
                <small>
                  <ul>
                    <li>
                      Desenvolvimento web com HTML, CSS, JS, React Native.
                    </li>
                    <li> Lógica de programação, banco de dados, APIs.</li>
                  </ul>
                </small>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2021-2023
                </div>
                <h3>SENAC Minas – Venda Nova</h3>
                <p>Curso Técnico em Informática Avançada</p>
                <smalll>2023 – Concluído</smalll>
                <small>
                  <ul>
                    <li>
                      Redes de computadores, manutenção de hardware/software .
                    </li>
                    <li>Java, PHP, SQL, servidores e infraestrutura.</li>
                  </ul>
                </small>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2024-2026
                </div>
                <h3>Técnico em Informática (Estágio)</h3>
                <p>Secretaria de Estado de Saúde de Minas Gerais (SES-MG)</p>
                <small>jan/2024 – atual</small>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  Outubro/2023-dez/2023
                </div>
                <h3>AWS Cloud Practitioner</h3>
                <p>Amazon Web Services</p>
                <small>dez/2023</small>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2018-2021
                </div>
                <h3>Inglês Avançado</h3>
                <p>CCAA</p>
                <small>concluído em 2021</small>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2024-2025
                </div>
                <h3>Curso de Inglês</h3>
                <p>English Evolution Academy</p>
                <small>em andamento – 2025</small>
              </div>
            </div>
          </div>
        </div>
        <span className="animate animate_aboutText_timer"></span>

        <div className="education-column">
          <h3 className="title">
            Experience
            <span className="animate .animate_aboutTitle_timer"></span>
          </h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2024-2026
                </div>
                <h3>Técnico em Informática (Estágio)</h3>
                <p>
                  Secretaria de Estado de Saúde de Minas Gerais (SES-MG) - Belo
                  Horizonte, MG
                </p>
                <small>jan/2024 – atual</small>
                <p>
                  <ul style={{ fontSize: "1.2rem", marker: "disc" }}>
                    <li>
                      - Suporte técnico aos usuários da Superintendência e
                      Assessoria de TI;
                    </li>
                    <li>
                      - Instalação e configuração de Windows 10/11 Professional;
                    </li>
                    <li>
                      - Gerenciamento de contas e permissões via Active
                      Directory;
                    </li>
                    <li>- Administração de Microsoft 365 e Admin Center;</li>
                    <li>
                      - Manutenção preventiva e corretiva de hardware, software
                      e ativos de rede;
                    </li>
                    <li>
                      - Colaborei com a padronização de procedimentos e melhoria
                      no tempo de resposta aos chamados;
                    </li>
                  </ul>
                  Resultados: <br />✅ Redução de 40% no tempo de entrega de
                  máquinas formatadas. <br />✅ Melhoria na organização e
                  controle de acessos da rede corporativa.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2024-2026
                </div>
                <h3>
                  Gerenciamento de contas e permissões via Active Directory
                </h3>
                <p>Secretaria de Estado de Saúde de Minas Gerais (SES-MG)</p>
                <small>jan/2024 – atual</small>
                <p>
                  <ul style={{ fontSize: "1.2rem", marker: "disc" }}>
                    <li>
                      - Criação de contas nos ADs ca.intra (AD para acesso as
                      máquinas CAMG) e saude (AD para e-mail) aos usuários da
                      Superintendência e Assessoria de TI;
                    </li>
                    <li>
                      - Gerenciamento de contas e permissões via Active
                      Directory, liberação de acessos, revogação de acessos,
                      atualização de dados dos servidores internos da SES-MG;
                    </li>
                    <li>
                      - Administração de Microsoft 365 e Admin Center - centro
                      de controle das contas Microsoft dos usuários da
                      secretaria;
                    </li>
                    <li>
                      - Colaborei com a padronização de procedimentos e melhoria
                      no tempo de resposta aos chamados;
                    </li>
                  </ul>
                  Resultados: <br />✅ Redução de 25% no tempo de atendimento
                  aos usuários e resolução de seus problemas. <br />✅ Melhoria
                  na organização e controle de acessos da rede corporativa.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2024-2026
                </div>
                <h3>Administração de Microsoft 365 e Admin Center</h3>
                <p>Secretaria de Estado de Saúde de Minas Gerais (SES-MG)</p>
                <small>jan/2024 – atual</small>
              </div>
            </div>
          </div>
        </div>
        <span className="animate animate_aboutText_timer"></span>
      </div>
    </section>
  );
};

export default Education;
