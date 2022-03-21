import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { changeUser } from '../actions';
import store from '../store';
import styles from '../styles/components/Register.module.css';
import { formatDate } from '../util/Format';

const Register = () => {
    const [values, setValues] = useState({
        vorname: '', nachname: '', username: '', email: '', passwort: '', geburtsdatum: ''
    });

    const [errors, setErrors] = useState({
        vorname: false, nachname: false, username: false, email: false, passwort: false, geburtsdatum: false, dbError: false
    });

    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

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
            vorname: e.target.firstname.value,
            nachname: e.target.lastname.value,
            username: e.target.username.value,
            email: e.target.email.value,
            passwort: e.target.password.value,
            geburtsdatum: formatDate(e.target.birthdate.value)
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
        const res = await fetch('http://localhost:4000/api/register', {
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

            <div className={styles.inputWrapper}>
                <Form.Group className={`mb-3 ${styles.leftInput}`} controlId="formRegisterFirstname">
                    <Form.Control type="text" placeholder="First name" name="firstname" value={values.vorname} onChange={e => setValues({...values, vorname: e.target.value})} />
                    {errors.vorname && <small className="form-text text-warning"> Bitte geben Sie Ihren Vornamen ein!</small>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRegisterLastname">
                    <Form.Control type="text" placeholder="Last name" name="lastname" value={values.nachname} onChange={e => setValues({...values, nachname: e.target.value})}/>
                    {errors.nachname && <small className="form-text text-warning"> Bitte geben Sie Ihren Nachnamen!</small>}
                </Form.Group>
            </div>

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

            <Form.Group className={`mb-3 ${styles.leftInput}`} controlId="formRegisterBirthdate">
                <Form.Control type="date" placeholder="MM/DD/YYYY" name="birthdate" value={values.geburtsdatum} onChange={e => setValues({...values, geburtsdatum: e.target.value})}/>
                {errors.geburtsdatum && <small class="form-text text-warning"> Sie müssen 18 Jahre alt sein!</small>}
            </Form.Group>

            <Button variant="primary" type="submit" >
                Registrieren
            </Button>
        </Form>
    );
};

export default Register;