import { Navbar as BTNavbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Navbar.module.css';
//import store from '../store';
import { BiLogOut } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const user = {};

    /*const logOut = () => {
        store.dispatch(changeUser({}));
        localStorage.removeItem('user');
        navigate('/auth');
    }*/

    return (
        <BTNavbar bg="dark" variant="dark">
            <Container>
                <BTNavbar.Brand className="align-bottom">
                    Kader-App
                </BTNavbar.Brand>
                <Nav className="me-auto">
                    <Link to="/tabelle" className="nav-link">Tabelle </Link>
                    <Link to="/kader" className="nav-link">Kader </Link>
                    <Link to="/" className="nav-link">Home </Link>
                    <Link to="/ergebnisse" className="nav-link">Ergebnisse </Link>
                    <Link to="/wetten" className="nav-link">Wetten </Link>
                </Nav>
                <Nav className='d-flex align-items-center' >
                    <Link to="/einstellungen" className="nav-link"> 
                        <BiCog className={`mx-4 text-muted ${styles.cog}`} />
                    </Link>
                    <BiLogOut className={`mx-4 text-muted ${styles.logout}`} />
                </Nav>
            </Container>
        </BTNavbar>
    );
}

export default Navbar;