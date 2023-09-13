import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const Header = (props) => {
  const imgHeader = props.imgHeader;
  return (
    <header
      className={`${styles.header}`}
      style={{ backgroundImage: `url('/images/${imgHeader}')` }}
    >        <div className={styles.container}>
        <img src="images/unnamed.png" alt="Logo" className={styles.logo} />

        <div className={styles.rightContainer}>
          <div className={styles.buttons}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white', width: '20px' }} />
            <div className='d-flex'>FR <span style={{ marginLeft: '5px' }}>▼</span></div>
          </div>

          <nav className={styles.nav}>
            <Link href="/qui-sommes-nous" className={styles.navLink}>Qui sommes nous</Link>
            <Link href="/nos-produits" className={styles.navLink}>Nos produits</Link>
            <Link href="/conseil-faq" className={styles.navLink}>Conseils & FAQ</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
            <Link href="/actualites" className={styles.navLink}>Actualités</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;