import React from "react";
import { ListGroup, Col, Button, Row } from "react-bootstrap";
import "../componentCss/Task.css";
import { useSelector, useDispatch } from "react-redux";
import { DeleteTodo, DoneTodo } from "../redux/Actions";
import EditTask from "./EditTask";

function Task() {
  // import the state from the store by using useSelector:
  const list = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(DeleteTodo(id));
  };

  const checkTodo = (id) => {
    dispatch(DoneTodo(id));
  };

  return (
    <div>
      {list.map((item, key) => (
        <ListGroup key={key}>
          <Row style={{ textAlign: "-webkit-center" }}>
            <Col sm={8}>
              <p className={item.isDone ? "check" : null}>{item.description}</p>
            </Col>
            <div className="buttons">
              <Col sm={2}>
                {/* <Button variant="warning">edit</Button> */}

                <EditTask el={item} />
              </Col>
              <Col sm={2}>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  delete
                </Button>
                <Button variant="light" onClick={() => checkTodo(item.id)}>
                  {item.isDone ? "unDone" : "isDone"}
                </Button>
              </Col>
            </div>
          </Row>
        </ListGroup>
      ))}
    </div>
  );
}
export default Task;
