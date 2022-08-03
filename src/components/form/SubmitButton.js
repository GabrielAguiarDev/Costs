import styles from "./SubmitButton.module.css";

function SubmirButton({ text }) {
  return (
    <div>
     <button className={styles.btn}>{text}</button>
    </div>
  );
}

export default SubmirButton;