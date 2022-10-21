import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext)
    const [name, setName] = useState(user.displayName)
    const photoURLRef = useRef(user.photoURL)

    const handelSubmit = (event) => {
        event.preventDefault()
        console.log(name)
        console.log(photoURLRef.current.value)
    }

    const handelChange = (event) => {
        setName(event.target.value)
        // console.log(name)
    }
    return (
        <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" defaultValue={user?.email}  readOnly placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={handelChange} defaultValue={name} type="text" placeholder="name"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo Url"  />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;