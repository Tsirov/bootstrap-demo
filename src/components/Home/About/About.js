import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Card, Container, Nav, InputGroup, FormControl, Form, Button, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCamera, faFingerprint, faWaveSquare, faAward, faPowerOff } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <>
            <h6 className="text-white pb-2">Your Nickname</h6>
            <Row>
                <Col className="col-5">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Nickname"
                            aria-label="Nickname"
                        />
                    </InputGroup>
                </Col>
                <Col className="col-3">
                    <p className="text-white p-size">You can add a nickname so you're not represented only with your wallet address </p>
                </Col>
            </Row>
            <Row>
                <Col className="col-5">
                    <InputGroup className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Email Address"
                            style={ { height: '100px' } }
                        />
                    </InputGroup>
                </Col >
                <Col className="col-3">
                    <p className="text-white p-size">Add a short bio description to your profile.</p>
                </Col>
                <Col className="col-5"><Button className="button-width">Update</Button></Col>
            </Row>
            <Row>
                <Col className="col-12">
                    <h6 className="text-white pb-2 pt-4">Your Email Address</h6>
                </Col >
                <Col className="col-5">
                    <InputGroup className="mb-3">

                        <FormControl
                            placeholder="Email..."
                            aria-label="Email..."
                        />
                    </InputGroup>
                </Col >
                <Col className="col-3">
                    <p className="text-white p-size"> Add a short bio description to your profile.</p>
                </Col>
                <Col className="col-5"><Button className="button-width"> Validate Email Address</Button></Col>
            </Row>
            <Row>
                <Col className="col-12">
                    <h6 className="text-white pb-2 pt-4">Images</h6>
                </Col >
                <Col className="col-12 ">
                    <CardGroup>
                        <Card className="d-flex">
                            <Card.Body>
                                <Card.Title className="fs-5">Upload a profile image</Card.Title>
                                <Card.Text style={ { fontSize: "12px" } }>
                                    REcommended size: 1000x10000px. JPG,PNG, or GIF. 100MB max size.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Body className="p-0">
                                <div className="file-wrapper">

                                    <div className="upload-button">
                                        <FontAwesomeIcon className="camera-icon" icon={ faCamera } />
                                        <p className="text-white upload-button-text">Upload From Your Computer</p>
                                    </div>
                                    <FormControl
                                        className='file-input'
                                        type="file"
                                        placeholder="File"
                                        aria-label="File"
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col >

            </Row>
        </>
    )
}

export default About;