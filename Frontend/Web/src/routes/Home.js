import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import store from '../store';
import { Navigate } from 'react-router-dom';
import styles from '../styles/routes/Home.module.css';
import NewsBody from '../components/NewsBody';


const Home = () => {

    /*if(!store.getState().user || Object.keys(store.getState().user).length === 0) {
        return <Navigate to='/auth'></Navigate>
    }*/

    return (
        <div className='mainContainer'>
            <Navbar />
            <Container className='mt-4'>
                <div className={`d-flex flex-column align-items-center `}>
                    <NewsBody />
                </div>
            </Container>
        </div>
    );
}

export default Home;