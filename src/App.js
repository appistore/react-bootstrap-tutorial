import React from 'react';
import logo from './logo.svg';
import slide1 from './slide1.svg';
import slide2 from './slide2.svg';
import slide3 from './slide3.svg';
import image from './image.jpg';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb, Card, Form, Table, Navbar, Nav, Container, NavDropdown, Row, Col, Accordion, Badge, Carousel, Pagination } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
           {/* Navbar Menu */}
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Carousel */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ slide1 }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ slide2 }
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ slide3 }
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


          <Form>
            <Row>
              <Col>    
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <br />
          <Row> 
            <Col> 
            </Col> 
            <Col>  
              <Card className="mb-3" style={{  color: "#000" }}>
                <Card.Img variant="top" src={ image } alt="image"  />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col> 
            <Col> 
            </Col> 
          </Row>

            <Breadcrumb>
              <Breadcrumb.Item>Test</Breadcrumb.Item>
              <Breadcrumb.Item>Test 2</Breadcrumb.Item>
              <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
            </Breadcrumb>
            <Alert variant="success"> This is a button</Alert>
            <Button>Test Button</Button>

          <Table striped style={{ backgroundColor: "#fff" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>

          <Container style={{ color: "#000", backgroundColor: "#fff" }}>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
              <Col xs={12} md={8}>
                xs=12 md=8
              </Col>
              <Col xs={6} md={4}>
                xs=6 md=4
              </Col>
            </Row>

            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
              <Col xs={6} md={4}>
                xs=6 md=4
              </Col>
              <Col xs={6} md={4}>
                xs=6 md=4
              </Col>
              <Col xs={6} md={4}>
                xs=6 md=4
              </Col>
            </Row>

            {/* Columns are always 50% wide, on mobile and desktop */}
            <Row>
              <Col xs={6}>xs=6</Col>
              <Col xs={6}>xs=6</Col>
            </Row>
          </Container>

          <Accordion defaultActiveKey="0" style={{ color: "#000"}}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div>
            <h1>
              Example heading <Badge bg="secondary">New</Badge>
            </h1>
            <h2>
              Example heading <Badge bg="secondary">New</Badge>
            </h2>
            <h3>
              Example heading <Badge bg="secondary">New</Badge>
            </h3>
            <h4>
              Example heading <Badge bg="secondary">New</Badge>
            </h4>
            <h5>
              Example heading <Badge bg="secondary">New</Badge>
            </h5>
            <h6>
              Example heading <Badge bg="secondary">New</Badge>
            </h6>
          </div>

          {/* Badge */}
          <div>
            <Badge bg="primary">Primary</Badge> <Badge bg="secondary">Secondary</Badge>{' '}
            <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{' '}
            <Badge bg="warning" text="dark">
              Warning
            </Badge>{' '}
            <Badge bg="info">Info</Badge>{' '}
            <Badge bg="light" text="dark">
              Light
            </Badge>{' '}
            <Badge bg="dark">Dark</Badge>
          </div>

          {/* Pagination */}
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>



        </Container>
      </header>
    </div>
  );
}




export default App;
