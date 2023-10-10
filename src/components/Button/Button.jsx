
import styles from "./Button.module.css";


function Button({black, icon, text, handleClick}) {
  return (
    <div className={black ? styles.black : styles.basic }>
      <button onClick={handleClick} className={styles.btn}>
        {icon}
        {text}
      </button>
    </div>
  );
}

export default Button;
