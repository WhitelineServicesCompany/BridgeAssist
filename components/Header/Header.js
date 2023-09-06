import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <header className={styles.header} >
        <div className={styles.container}>
          <img src="images/unnamed.png" alt="Logo" className={styles.logo} />
  
          <div className={styles.rightContainer}>
            <div className={styles.buttons}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'white',width:'20px'}} />
              <div className='d-flex'>FR <span style={{marginLeft:'5px'}}>▼</span></div>
            </div>
            
            <nav className={styles.nav}>
              <a href="#" className={styles.navLink}>Qui sommes nous</a>
              <a href="#" className={styles.navLink}>Nos produits</a>
              <a href="#" className={styles.navLink}>Conseils & FAQ</a>
              <a href="#" className={styles.navLink}>Contact</a>
              <a href="#" className={styles.navLink}>Actualités</a>
            </nav>
          </div>
        </div>
      </header>
    );
}
export default Header;