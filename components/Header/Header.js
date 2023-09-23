import styles from './Header.module.css';
import NavbarComponent from '../Navbar/Navbar';

const Header = (props) => {
  return (
    <header className={styles.header} style={{ backgroundImage: `url('/images/${props.imgHeader}')` }}>
      <div className={styles.flexContainer}>
        <NavbarComponent />
        <div className={`width2 ${styles.contentContainer}`}>
          <div className={styles.textContainer}>
            <h1 className={styles.titleHeader}>{props.title}</h1>
            <p className={styles.subHeader}>{props.subTitle}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
