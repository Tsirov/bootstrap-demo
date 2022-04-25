import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css';
import About from './About/About';
import Activity from './Activity/Activity';
import  Navbar from '../Nav/Nav';

import { Row, Col, Card, Container, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCamera, faFingerprint, faWaveSquare, faAward, faPowerOff } from '@fortawesome/free-solid-svg-icons'



const Home = (props) => {
    console.log('props',props.element);
    return (
        <>
            <Navbar element={true }/>
            <Container className='pt-5'>
                <Row>
                    <Col className="col-12">
                        <Card className="profile-title" >
                            <div className='avatarDiv'>
                                <img className='rounded-circle avatar' src='avatar.jpg' />
                            </div>
                            <Card.Body>
                                <Card.Title>Address</Card.Title>
                                <Card.Text className="ethereum-address">
                                    0x15156ds1asf51asf5sad1as23das5f61a52
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={ { paddingLeft: "50px" } }>
                    <h1 className="text-white p-3">Your profile</h1>
                    <Col className="col-3 ">
                        <Nav defaultActiveKey="/home" className="flex-column text-white">
                            <Nav.Link href="/"> <FontAwesomeIcon className="icons" icon={ faUser } />   About</Nav.Link>
                            <Nav.Link eventKey="link-1"> <FontAwesomeIcon className="icons" icon={ faFingerprint } />  Identity</Nav.Link>
                            <Nav.Link href="/activity" eventKey="link-2"><FontAwesomeIcon className="icons" icon={ faWaveSquare } />  Activity</Nav.Link>
                            <Nav.Link href="/items" eventKey="disabled"><FontAwesomeIcon className="icons" icon={ faAward } /> Items</Nav.Link>
                            <Nav.Link className="p-3" eventKey="aaa"><FontAwesomeIcon className="icons" icon={ faPowerOff } /> Disconnect Wallet</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="col-8">
                        
                        {props.element ? <Activity/> :<About />  }
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;

