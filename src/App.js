import React from 'react';
import { Container, Col, Row} from 'reactstrap';
import Tasks from './Tasks';

class App extends React.Component {
  //declare state containing dummy text
  state = {
    tasks: [
      {id: 1, taskDetails : 'Make my bed'},
      {id: 2, taskDetails : 'Wash the dishes'}
    ]
  }
  render() {
    return (
      <div className="task-app ml-5">
          <Container>
            <Row>
              <Col>
                <h1 className="h1 text-center">Hannah's Todo List</h1>
                <Tasks tasks={this.state.tasks}/> 
              </Col>
            </Row>
          </Container>
      </div>
    )
  }
}
export default App;
