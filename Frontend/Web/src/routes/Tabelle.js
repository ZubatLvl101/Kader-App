import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
//import store from '../store';
import { Navigate } from 'react-router-dom';
import styles from '../styles/routes/Home.module.css';
import { tablleDaten } from '../data/data';

const Tabelle = () => {

    /*if(!store.getState().user || Object.keys(store.getState().user).length === 0) {
        return <Navigate to='/auth'></Navigate>
    }*/

    return (
        <div className='mainContainer'>
            <Navbar />
            <Container className='mt-4'>
                <div>
                    <div className={styles.text}>
                        <h3 className={styles.title}>Tabelle</h3>
                        <div >
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Position</th>
                                        <th>Name</th>
                                        <th>Punkte</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tablleDaten.map((element,idx) => (
                                        <tr key = {idx}>
                                            <td >{element.position}</td>
                                            <td >{element.name}</td>
                                            <td >{element.punkte}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>                
            </Container>
        </div>
    );
}

export default Tabelle;