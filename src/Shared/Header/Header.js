import { useContext } from 'react';
import { Image, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

function Header() {

    const { user, logOut } = useContext(AuthContext)

    const handelLogOut = () => {
        logOut()
            .then(() => {
                console.log('log out successFully')
             })
            .catch(() => {
            
        })
    }
    

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/' className='text-decoration-none'>Dragon News</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='text-light align-items-center  text-decoration-none'>All News</NavLink>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='align-items-center'>
                        <Nav.Link>
                            {
                            
                                user?.uid  ?
                                <>
                                        <span> {user.displayName}</span>
                                        <button onClick={handelLogOut} className='bg-transparent border-0 mx-3'>Log Out</button>
                                </> 
                        :
                                    <>
                                        <Link to='/login' className='ps-2 text-decoration-none'>Login</Link>
                                        <Link to='/register' className='ps-2 text-decoration-none'>Register</Link>
                                    </>
                                
                            }
                        
                        </Nav.Link>
                        <Link to='/profile' >
                            {
                                user?.photoURL ? 
                                    <Image src={user?.photoURL}
                                        roundedCircle
                                    style={{height: '30px'}}/>
                                    :
                                    <FaUser></FaUser>
                           }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;