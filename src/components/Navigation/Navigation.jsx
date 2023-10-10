import styles from './Navigation.module.css';
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      {/* <img src="images/logo.png" alt="" /> */}
      <h2> <Link style={{textDecoration: 'none', color: 'black'}} to="/">FAHIM'S</Link></h2>
      <ul>
        <li><Link style={{textDecoration: 'none', color: 'black'}} to={"/"}>HOME</Link></li>
        <li><Link style={{textDecoration: 'none', color: 'black'}} to={'about'}>ABOUT</Link></li>
        <li><Link style={{textDecoration: 'none', color: 'black'}} to={'contact'}>CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
