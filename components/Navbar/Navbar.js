
import styles from './Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function NavbarComponent() {
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className=" py-3 mx-auto" style={{ width: '90%', borderBottom: '1px solid white' }}>
                    <Container fluid>
                        <img src="images/unnamed.png" alt="Logo" className={styles.logo} />
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img
                                        src="/images/LOGO-14.png"
                                        alt="Innovation et expertise"
                                        style={{ width: '130px', height: 'auto' }}

                                    />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className={` justify-content-end flex-grow-1 pe-3`}>
                                    <div className={styles.rightContainer}>
                                        <div className={styles.buttons}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '20px' }} />
                                            <div className='d-flex'>FR <span style={{ marginLeft: '5px' }}>▼</span></div>
                                        </div>

                                        <nav className={styles.nav}>
                                            <Link href="/qui-sommes-nous" className={styles.navLink}>Qui sommes nous</Link>

                                            <NavDropdown
                                                title={<span className="titleClass" style={{ height: '100%', alignItems: 'top' }}>Nos produits</span>}
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                className={` ${styles.navLink}`}
                                            >
                                                <NavDropdown.Item href="#action3">B-AUTO</NavDropdown.Item>
                                                <NavDropdown.Item href="#action4">
                                                    B-TRAVEL
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action5">
                                                   B-GLASS
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action5">
                                                   B-HOME
                                                </NavDropdown.Item>
                                            </NavDropdown>

                                            <Link href="/conseil-faq" className={styles.navLink}>Conseils & FAQ</Link>
                                            <Link href="/contact" className={styles.navLink}>Contact</Link>
                                            <Link href="/actualites" className={styles.navLink}>Actualités</Link>
                                        </nav>
                                    </div>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavbarComponent;