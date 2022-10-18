import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button variant='outline-primary'> <FaGoogle /> Login With Google</Button>
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