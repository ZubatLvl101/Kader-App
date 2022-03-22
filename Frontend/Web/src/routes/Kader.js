import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import store from '../store';
import { Navigate } from 'react-router-dom';
import styles from '../styles/routes/Kader.module.css';
import { spielerDaten } from '../data/data';



const Kader = () => {

    /*if(!store.getState().user || Object.keys(store.getState().user).length === 0) {
        return <Navigate to='/auth'></Navigate>
    }*/

    return (
        <div className={`mainContainer ${styles.hei}`}>
            <Navbar />
            <Container className= {`mt-4 ${styles.hei}`}>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <h3 className={styles.title}>Kader</h3>
                        Hello World
                    </div>
                </div>                
            </Container>
        </div>
    );
}

export default Kader;