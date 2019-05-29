import React from 'react'
import {ListGroup, ListGroupItem, Container, Row, Col} from 'reactstrap'

const Tasks = ({tasks})  => {
    //check if there are any tasks then display a response
    const taskList = tasks.length ? (
        tasks.map(task => {
            return (
               <Container>
                   <Row>
                       <Col>
                       <ListGroupItem className="center" key = {task.id}>
                        <span>{task.taskDetails}</span>
                    </ListGroupItem>
                       </Col>
                   </Row>
               </Container>

            )
        })
    ) : (
        
            <ListGroup>
            <ListGroupItem className="center">You have nothing left</ListGroupItem>
            </ListGroup>
      
    )
    return(
        <div className="tasks">
            {taskList}
        </div>
    )

}

export default Tasks