import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <h1>Contato</h1>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/gabriel-aguiar-dev/"><span>Linkedin</span><FaLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/GabrielAguiarDev/Costs"><span>Github</span><FaGithub /></a>
        </li>
        <li>
          <a href="https://wa.me/+5573998486884"><span>Whatsapp</span><FaWhatsapp /></a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
