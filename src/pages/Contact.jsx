import { useRef, useState } from "react";
import "./Contact.css";

import { InputMask } from "@react-input/mask";

import emailjs from "@emailjs/browser";

// Uma biblioteca bastante popular para implementar notificações em aplicações React é o
// React-Toastify.
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [cel, setCel] = useState("");
  const [msg, setMsg] = useState("");

  const templateParams = {
    from_name: name,
    message: msg,
    cellPhone: cel,
    subject: subject,
    email: email,
    reply_to: email,
  };

  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);

  const SendForm = async (e) => {
    e.preventDefault();

    // Validação
    if (!name || !email || !subject || !msg || !cel) {
      setError(true);
      setErrorMsg("Por favor, preencha todos os campos.");
      toast.error("Por favor, preencha todos os campos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setErrorMsg("");
    // Validação E-mail
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError(true);
      setErrorMsg("E-mail inválido.");
      toast.error("E-mail inválido!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setErrorMsg("");
    try {
      if (!error) {
        const response = await emailjs.send(
          "service_5yem838",
          "template_x4d5pdj",
          templateParams,
          "6NfX34NLMkMkHT4fI"
        );

        console.log("Email enviado!", response.status);
        setError(false);
        setErrorMsg("Mensagem enviada com sucesso!");
        toast.success("Sua mensagem foi enviada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Limpar campos
        setName("");
        setEmail("");
        setSubject("");
        setCel("");
        setMsg("");
      }
      setErrorMsg("");
    } catch (err) {
      console.error("Erro ao enviar:", err);
      setError(true);
      setErrorMsg("Erro ao enviar. Tente novamente.");
      toast.error("Erro ao enviar. Tente novamente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("ERROR", err.text);
    }
    setErrorMsg("");
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
          <span className="animate animate_aboutHeading_timer"></span>
        </h2>
        <form
          action=""
          method="post"
          onSubmit={SendForm}
          name="FormSubmit"
          ref={form}
        >
          <span className="animate animate_aboutImg_timer"></span>
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                placeholder="Full Name"
                required
                name="your_name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                required
                name="your_email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <InputMask
                mask="+__ (__)-____-_____"
                replacement={{ _: /\d/ }}
                placeholder="Mobile Number"
                id="telefone"
                required
                name="your_mobile_number"
                onChange={(e) => {
                  setCel(e.target.value);
                }}
                value={cel}
              />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input
                type="text"
                placeholder="Email Subject"
                required
                name="subject"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                value={subject}
              />
              <span className="focus"></span>
            </div>
          </div>

          <div className="textarea-field">
            <textarea
              name="message"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              value={msg}
            ></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <button
              type="submit"
              className="btn"
              value="Submit"
              name="btn_submit"
              disabled={errorMsg == "" ? false : true}
            >
              Submit
            </button>
          </div>
          <ToastContainer />
        </form>
      </section>
    </>
  );
};

export default Contact;
