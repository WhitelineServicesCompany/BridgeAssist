import styles from './Header.module.css';
import NavbarComponent from '../Navbar/Navbar';
const Header = (props) => {
  const imgHeader = props.imgHeader;
  return (
    <header
      className={`${styles.header}`}
      style={{ backgroundImage: `url('/images/${imgHeader}')` }}
    >
      <NavbarComponent />
    </header>
  );
}
export default Header;