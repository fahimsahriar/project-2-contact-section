import styles from "./ContactHeading.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { BiEnvelope } from "react-icons/bi";
import {useState} from 'react';

export function ContactHeading() {
  let name, email, message;
  const [nameState, setName] = useState('');
  const [emailState, setEmail] = useState('');
  const [textState, setText] = useState('');


  const handleSubmit = (event) => {
    event. preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }

  return (
    <div className={`container ${styles.container}`}>
      <h1>CONTACT US</h1>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>

      {/* two column part */}
      <div className={styles.contact_content}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <div className={styles.top_btn_column}>
              <Button
                icon={<MdMessage />}
                black={true}
                text="Via Support Chat"
              />
            </div>
            <div className={styles.top_btn_column}>
              <Button
                icon={<MdPhone />}
                black={true}
                text="Via Call"
              />
            </div>
          </div>
          <Button
            icon={<BiEnvelope />}
            text="Via Email"
          />
          <div className={styles.div_form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.form}>
                <label htmlFor="name">Name</label>
                <input autoComplete="true"  name="name" type="text" 
                id="name"/>
              </div>
              <div className={styles.form}>
                <label htmlFor="email">Email</label>
                <input autoComplete="true"  id="email" type="text" />
              </div>
              <div className={styles.form}>
                <label htmlFor="text">Text</label>
                <textarea name="text" className={styles.Message} type="text"  id="text"/>
              </div>
              <div className={styles.submit_container}>
                <div className={styles.submit_col}>
                  <Button black={true} text="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.contact_image}>
          <img src="images/Service 24_7-pana 1.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default ContactHeading;
