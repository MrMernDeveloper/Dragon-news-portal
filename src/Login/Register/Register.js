import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)

    const { createAccount, updateUserProfile, verifyEmail } = useContext(AuthContext)
    

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createAccount(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setError('')
                handelUpdateProfile(name, photoURL)
                handelEmailVerification()
                toast.success('Please Verify your email');
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
        })
    }

    const handelUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    const handelEmailVerification = () => {
        verifyEmail()
            .then(() => { })
        .catch(error=>console.error(error))
        
    }

    const handelChecked = (event) => {
    setAccepted(event.target.checked)
        
    }
    return (
        <Form className='mt-4' onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email"  required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password"  required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handelChecked}
                    type="checkbox"
                    label={<>Accept <Link to='/terms'>Terms and conditions</Link> </>} />
            </Form.Group>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <Button variant="primary" type="submit" className='d-block'
            disabled={!accepted}>
             Register
            </Button>

        </Form>
    );
};

export default Register;