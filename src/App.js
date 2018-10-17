import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import Facebook from './components/Facebook';

class App extends Component {
  render() {
    return (
      <div>
        <br/>
        <Container>
        <Row>
          <Col>
            {/* put your fb clientid inside <Facebook/> component */}
            <Facebook clientId = ""/>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;