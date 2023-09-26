import styles from './Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function NavbarComponent() {
    const Router = useRouter();

    const isActif = (paths) => {
        if (Array.isArray(paths)) {
            return paths.some(path => Router.pathname === path);
        }
        return Router.pathname === paths;
    }

    return (
        <Navbar expand="lg" className="py-3 mx-auto" style={{ width: '90%', borderBottom: '1px solid white' }}>
            <Container fluid>
                <Link href="/">
                    <img src="/images/unnamed.png" alt="Logo" className={styles.logo} />
                </Link>

                <Navbar.Toggle aria-controls="offcanvasNavbar" />

                <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            <Link href='/'>
                                <img
                                    src="/images/LOGO-14.png"
                                    alt="Innovation et expertise"
                                    style={{ width: '130px', height: 'auto' }}
                                />
                            </Link>
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className={`justify-content-end flex-grow-1 pe-3`}>
                            <div className={styles.rightContainer}>
                                <div className={styles.buttons}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '20px' }} />
                                </div>

                                <nav className={styles.nav}>
                                    <Link href="/qui-sommes-nous" className={`${isActif('/qui-sommes-nous') ? styles.active : ''} ${styles.navLink}`}>
                                        Qui sommes-nous ?
                                    </Link>

                                    <NavDropdown
                                        title={<span className={`titleClass ${isActif(['/Produits/B-Auto', '/Produits/B-Travel', '/Produits/B-Glass', '/Produits/B-Home']) ? styles.active : ''}`} style={{ height: '100%', alignItems: 'top' }}>
                                            Nos produits
                                        </span>}
                                        id="offcanvasNavbarDropdown"
                                        className={styles.navLink}
                                    >
                                        <NavDropdown.Item href="/Produits/B-Auto">B-AUTO</NavDropdown.Item>
                                        <NavDropdown.Item href="/Produits/B-Travel">B-TRAVEL</NavDropdown.Item>
                                        <NavDropdown.Item href="/Produits/B-Glass">B-GLASS</NavDropdown.Item>
                                        <NavDropdown.Item href="/Produits/B-Home">B-HOME</NavDropdown.Item>
                                    </NavDropdown>

                                    <Link href="/conseil-faq" className={`${isActif('/conseil-faq') ? styles.active : ''} ${styles.navLink}`}>Conseils & FAQ</Link>
                                    <Link href="/contact" className={`${isActif('/contact') ? styles.active : ''} ${styles.navLink}`}>Contact</Link>
                                    <Link href="/actualites" className={`${isActif('/actualites') ? styles.active : ''} ${styles.navLink}`}>Actualités</Link>
                                </nav>
                            </div>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
