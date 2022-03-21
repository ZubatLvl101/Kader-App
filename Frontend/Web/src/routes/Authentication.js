import { Card, Tabs, Tab } from 'react-bootstrap';
import Login from '../components/Login';
import Register from '../components/Register';
import styles from '../styles/routes/Authentication.module.css';
import { Navigate } from 'react-router-dom';
import store from '../store';

const Authentication = () => {

    if(store.getState().user && Object.keys(store.getState().user).length > 0) {
        return <Navigate to='/'></Navigate>
    }

    return (
        <div className={styles.wrapper}>
            <Card>
                <Card.Body>
                <Tabs defaultActiveKey="login" id="auth-tab" className='mb-3' variant='tabs'>
                    <Tab eventKey="login" title="Login">
                        <Login />
                    </Tab>
                    <Tab eventKey="registerUser" title="Register" >
                        <Register />
                    </Tab>
                </Tabs>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Authentication;