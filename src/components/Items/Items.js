import './Items.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Nav/Nav';

import { Row, Col, Card,  Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons'


const Items = () => {
    return (
        <>
            <Navbar />
            <Row>
                <Col className="col-12 items-time ">
                    <h1 className="bg-danger fs-4 m-0 items-time-h1">LIVE </h1>
                    <p className='text-white ms-3 p-0 m-0 '> Ends in 3d 2h 23m 32s</p>
                </Col>
            </Row>
            <Row className="justify-content-around">
                <Col className="col-3 items-body">
                    <Card className="items-body-wrapper">
                        <Card.Img variant="top" src="avatar.jpg" />
                        <Card.Body className="ps-0">
                            <Card.Title className="text-white">Your bid</Card.Title>
                            <Card.Text>
                                <p className="text-white m-0">12.323213 ($32.32)</p>
                                <p className="items-body-wrapper-data">May 12 2012,04:04:25</p>
                            </Card.Text>
                        </Card.Body>

                        <Card.Body className="p-0 ">
                            <Button className=" items-body-wrapper-button">Claim Bid</Button>
                            <Button className="mt-3 items-body-wrapper-button">Reject Bid</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-4 items-body">
                    <Row>
                        <Col className="col-2">
                            <p className="items-body-preview"><FontAwesomeIcon className="icons items-body-preview" icon={ faHeart } />  55 </p>
                        </Col>
                        <Col className="col-7">
                            <p className="items-body-preview"><FontAwesomeIcon className="icons items-body-preview" icon={ faEye } />  2.5k </p>
                        </Col>
                        <Col className="col-3">
                            <p className="items-body-preview">ROYALTIES: 5% </p>
                        </Col>
                    </Row>
                    <Row>
                        <h3 className="text-white p-0"> Egestas Magna Nullam Lorem</h3>
                    </Row>
                    <Row >
                        <Col className="col-4 ps-0"><Button className="items-body-button-preview">History</Button></Col>
                        <Col className="col-4"><Button className="items-body-button-preview">Description</Button></Col>
                        <Col className="col-4 pe-0"><Button className="items-body-button-preview">Token</Button></Col>
                    </Row>
                    <Row className="items-body-card">
                        <Col className="col-9">
                            <p className="items-body-card-address m-0">0xdasffafddaefdafadfadfaf</p>
                            <p className="items-body-card-day m-0">Yesterday</p>
                        </Col>
                        <Col className="col-3">
                            <h4 className="text-white m-0">40.51 EHT</h4>
                        </Col>
                    </Row>
                    <Row className="items-body-card">
                        <Col className="col-9">
                            <p className="items-body-card-address m-0">0x23edsad23edadaf</p>
                            <p className="items-body-card-day m-0">Yesterday</p>
                        </Col>
                        <Col className="col-3">
                            <h4 className="text-white m-0">50.551 EHT</h4>
                        </Col>
                    </Row>

                    <Row className="items-body-card">
                        <Col className="col-9">
                            <p className="items-body-card-address m-0">321edasdd21eqdasaf</p>
                            <p className="items-body-card-day m-0">Yesterday</p>
                        </Col>
                        <Col className="col-3">
                            <h4 className="text-white m-0">33.33 EHT</h4>
                        </Col>
                    </Row>

                    <Row className="items-body-card">
                        <Col className="col-9">
                            <p className="items-body-card-address m-0">0xdasffafddaefdafadfadfaf</p>
                            <p className="items-body-card-day m-0">Yesterday</p>
                        </Col>
                        <Col className="col-3">
                            <h4 className="text-white m-0">40.51 EHT</h4>
                        </Col>
                    </Row>
                </Col>

                <Col className="col-5 items-body-details3-wrapper">
                    <Row>
                        <Button className="items-body-view-details-button"> View art details </Button>
                    </Row>
                    <Row>
                        <h3 className="text-white ms-3">3 Fragments</h3>
                    </Row>
                    <Row>
                        <Card className="items-body-details3-wrapper-card-details" >
                            <Card.Img className="items-body-details3-wrapper-img1" variant="top" src="avatar.jpg" />
                            <Card.Body className="items-body-details3-wrapper-card-details-details ps-0">
                                <Card.Title className="text-white">Euismod Partuient Sem</Card.Title>
                                <Card.Text>
                                    <p className="items-body-preview">WINNING BID</p>
                                    <Row>
                                        <Col className="col-9">
                                            <p className="text-white">~$234 234</p>
                                        </Col>
                                        <Col>
                                            <p className="items-body-preview"><FontAwesomeIcon className="icons items-body-preview" icon={ faHeart } />  55 </p>
                                        </Col>
                                    </Row>

                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Row>
                    <Row className="last">
                        <Col className=" items-body mt-0 mb-5" >
                            <Card className="items-body-wrapper" style={{margin:"0 auto"}}>
                                <Card.Img variant="top" src="avatar.jpg" />
                                <Card.Body className="ps-0">
                                    <Card.Title className="text-white">Your bid</Card.Title>
                                    <Card.Text>
                                        <p className="items-body-preview">WINNING BID</p>
                                        <Row>
                                            <Col className="col-9">
                                                <p className="text-white">~$234 234</p>
                                            </Col>
                                            <Col>
                                                <p className="items-body-preview"><FontAwesomeIcon className="icons items-body-preview" icon={ faHeart } />  55 </p>
                                            </Col>
                                        </Row>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Items;