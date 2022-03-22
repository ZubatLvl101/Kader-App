import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

const Register = () => {
    const [values, setValues] = useState({
        username: '', email: '', passwort: ''
    });

    const [errors, setErrors] = useState({
        username: false, email: false, passwort: false, dbError: false
    });

    const [success, setSuccess] = useState(false);

    const register = async (e) => {
        e.preventDefault();

        const newErrors = {};
        let errorOccured = false;

        for(const [key, value] of Object.entries(values)) {
            newErrors[key] = !value;
            if(!value) errorOccured = true;
        }
        
        if(errorOccured) {
            setErrors({...newErrors, dbError: false});
            setSuccess(false);
            return;
        }
    
        let user = {
            username: e.target.username.value,
            email: e.target.email.value,
            passwort: e.target.password.value,
        }

        const res = await registerUser(user);

        if(!res.error && !res.errorNum) {
            setSuccess(true);
            setErrors({});
        } else {
            setSuccess(false);
            setErrors({dbError: true});
        }
        
    };

    const registerUser = async (user) => {
        const res = await fetch('http://127.0.0.1:5000/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })

        return res.json();
    }

    return (
        <Form onSubmit={register}>
            {errors.dbError && <Alert variant='danger' onClose={() => setErrors({})} dismissible>
                Registrierung ist fehlgeschlagen!
            </Alert>}

            {success && <Alert variant='success' onClose={() => setSuccess(false)} dismissible>
                Sie haben sich erfolgreich registriert!
            </Alert>}

            <Form.Group className="mb-3" controlId="formRegisterUsername">
                <Form.Control type="text" placeholder="Username" name="username" value={values.username} onChange={e => setValues({...values, username: e.target.value})}/>
                {errors.username && <small class="form-text text-warning"> Bitte geben Sie einen Benutzernamen ein!</small>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRegisterEmail">
                <Form.Control type="email" placeholder="E-mail Address" name="email" value={values.email} onChange={e => setValues({...values, email: e.target.value})}/>
                {errors.email && <small class="form-text text-warning"> Bitte geben Sie Ihre E-Mail Adresse ein!</small>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRegisterPassword">
                <Form.Control type="password" placeholder="Password" name="password" value={values.passwort} onChange={e => setValues({...values, passwort: e.target.value})}/>
                {errors.passwort && <small class="form-text text-warning"> Ihr Passwort muss mindestens aus 8 Zeichen bestehen!</small>}
            </Form.Group>

            <Button variant="primary" type="submit" >
                Registrieren
            </Button>
        </Form>
    );
};

export default Register;