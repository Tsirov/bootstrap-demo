import { Nav, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

const Navbar = (props) => {
console.log('nav',props.element);
    return (
        <>
            <Row>
                <Col className='col-12'>
                    <Nav className='d-block'>
                        <Nav.Item className="float-start">
                            <Nav.Link href="/">Fragmint</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="float-start" >
                            <Nav.Link eventKey="link-1">Lionagate</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="float-end" >
                            <Nav.Link eventKey="link-2">How to Participate</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="float-end" >
                            <Nav.Link eventKey="link-2">Connected</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                { props.element
                    ?
                    <Col className='col-12 p-1 d-flex email-verification justify-content-center'>
                        <div >
                            <InputGroup >

                                <InputGroup.Text className="email-name " id="basic-addon1">Plase verify your email address</InputGroup.Text>
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                                <Button variant="outline-secondary" className='bg-dark' id="button-addon2">Login</Button>
                            </InputGroup>

                        </div>
                    </Col>
                    : ""
                }
            </Row>
        </>
    )
}

export default Navbar;