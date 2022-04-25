
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Card, Container, Nav, InputGroup, FormControl, Form, Button, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import './Activity.css';

const Activity = () => {
    return (

        <>
            <Row>
                <Col className="col-12 d-flex align-items-center " >
                    <h6  className="text-white m-0 me-4 p-2 pe-4 ps-4 activity-h6">All bids : 2</h6>
                    <Button className="pe-4 ps-4 activity-button">Wining bids :0</Button>
                </Col>
                <Col className="col-12 mt-4 activity-wrapper ">
                    <Row className="d-flex align-items-center p-2">
                        <Col className="col-2">
                        <img className="activity-wrapper-img" src="data:image/png;base64,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" alt="" />
                        </Col>
                        <Col className="col-3  d-flex align-items-center ">
                            <h3 className=" fs-6 p-0 me-2  activity-wrapper-h3">Bid on </h3>
                            <h3 className="text-white fs-6 p-0"> Cras Lorem </h3>
                        </Col>
                        <Col className="col-2">
                        <p className="text-white " style={{fontSize: "14px"}}> 1d ago</p>
                        </Col>
                        <Col className="col-2">
                        <h1 className="text-white fs-5">32.51 ETH</h1>
                        </Col>
                        <Col className="col-3">
                            <Button className=" ms-5 etherscan-button">Etherscan  <FontAwesomeIcon className="icons " icon={ faArrowUpRightFromSquare } /> </Button>
                        </Col>
                    </Row>
                    
                </Col>

                <Col className="col-12 mt-4 activity-wrapper ">
                    <Row className="d-flex align-items-center p-2">
                        <Col className="col-2">
                        <img className="activity-wrapper-img" src="data:image/png;base64,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" alt="" />
                        </Col>
                        <Col className="col-3  d-flex align-items-center ">
                            <h3 className=" fs-6 p-0 me-2  activity-wrapper-h3">Bid on </h3>
                            <h3 className="text-white fs-6 p-0"> Cras Lorem </h3>
                        </Col>
                        <Col className="col-2">
                        <p className="text-white " style={{fontSize: "14px"}}> 1d ago</p>
                        </Col>
                        <Col className="col-2">
                        <h1 className="text-white fs-5">32.51 ETH</h1>
                        </Col>
                        <Col className="col-3">
                            <Button className=" ms-5 etherscan-button">Etherscan  <FontAwesomeIcon className="icons " icon={ faArrowUpRightFromSquare } /> </Button>
                        </Col>
                    </Row>
                    
                </Col>

                <Col className="col-12 mt-4 activity-wrapper ">
                    <Row className="d-flex align-items-center p-2">
                        <Col className="col-2">
                        <img className="activity-wrapper-img" src="data:image/png;base64,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" alt="" />
                        </Col>
                        <Col className="col-3  d-flex align-items-center ">
                            <h3 className=" fs-6 p-0 me-2  activity-wrapper-h3">Bid on </h3>
                            <h3 className="text-white fs-6 p-0"> Cras Lorem </h3>
                        </Col>
                        <Col className="col-2">
                        <p className="text-white " style={{fontSize: "14px"}}> 1d ago</p>
                        </Col>
                        <Col className="col-2">
                        <h1 className="text-white fs-5">32.51 ETH</h1>
                        </Col>
                        <Col className="col-3">
                            <Button className=" ms-5 etherscan-button">Etherscan  <FontAwesomeIcon className="icons " icon={ faArrowUpRightFromSquare } /> </Button>
                        </Col>
                    </Row>
                    
                </Col>

                <Col className="col-12 mt-4 activity-wrapper ">
                    <Row className="d-flex align-items-center p-2">
                        <Col className="col-2">
                        <img className="activity-wrapper-img" src="data:image/png;base64,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" alt="" />
                        </Col>
                        <Col className="col-3  d-flex align-items-center ">
                            <h3 className=" fs-6 p-0 me-2  activity-wrapper-h3">Bid on </h3>
                            <h3 className="text-white fs-6 p-0"> Cras Lorem </h3>
                        </Col>
                        <Col className="col-2">
                        <p className="text-white " style={{fontSize: "14px"}}> 1d ago</p>
                        </Col>
                        <Col className="col-2">
                        <h1 className="text-white fs-5">32.51 ETH</h1>
                        </Col>
                        <Col className="col-3">
                            <Button className=" ms-5 etherscan-button">Etherscan  <FontAwesomeIcon className="icons " icon={ faArrowUpRightFromSquare } /> </Button>
                        </Col>
                    </Row>
                    
                </Col>

            </Row>
        </>
    )
}

export default Activity;