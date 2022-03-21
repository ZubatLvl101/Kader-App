import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import store from '../store.js';
import { changeUser } from '../actions';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        setShowAlert(!email || !password);

        if (!email || !password) return;

        const user = {
            email: e.target.email.value,
            passwort: e.target.password.value
        }

        const res = await loginUser(user);
        console.log(res);

        if(!res.error) {
            store.dispatch(changeUser(res));
            localStorage.setItem('user', JSON.stringify(res));
            navigate('/');
        } else {
            setShowAlert(true);
        }
    };

    const loginUser = async (user) => {
        const res = await fetch('http://localhost:4000/api/login', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((messages) => messages);

        return res;
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formLoginEmail">
                {showAlert && <Alert variant='warning'>
                    Ungültige Kombination von Benutzernamen und Passwort!
                </Alert>}
                <Form.Control type="email" placeholder="E-Mail" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLoginPassword">
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;