import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';


const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url, total_view, rating} = news
    // console.log(news)
    return (
        <Card className='my-4 '>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <div>
                        <Image src={author.img}
                            roundedCircle
                            style={{ height: '50px' }} />
                    </div>
                    <div className='ms-2'>
                        <p className='mb-0'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details?.length > 250 ?
                            <p> {details.slice(0, 250) + '....'} <Link to={`/news/${_id}`}>Read More</Link></p>
                         
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className='text-warning'></FaStar>
                    <span className='ms-2'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
                
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;