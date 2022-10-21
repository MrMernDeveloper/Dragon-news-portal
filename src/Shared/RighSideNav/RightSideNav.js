import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();

    const handelGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
        
    }
    return (
        <div className='mt-3'>
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handelGoogleSignIn} variant='outline-primary'> <FaGoogle /> Login With Google</Button>
                    <Button variant='outline-dark'> < FaGithub /> Login With Github</Button>
                </ButtonGroup>
            </div>
            <h5 className='my-2'>Find Us On</h5>
            <ListGroup>
            <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaWhatsapp/> WhatsAPP </ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter /> Twiteer </ListGroup.Item>
                <ListGroup.Item className='mb-2'> <FaTwitch/> Twitch</ListGroup.Item>
            </ListGroup>
            <div className='mt-3'>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;