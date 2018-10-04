import React, { Component } from 'react';
import { Alert, Button, Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import Facebook from './components/Facebook';

class App extends Component {
  render() {
    return (
      
      <div>
        <br/>
        <Container>
        <Row>
          <Col>
            <Facebook />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;