import React, { Component } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

type MyProps = {
  isOpen: boolean;
  toggle;
};

export class CreateStudent extends Component<MyProps> {
  // state = { :  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>
            Adding New Student
          </ModalHeader>
          <Form>
            <Row>
              <Col>
                <label>First Name </label>
              </Col>
              <Col>
                <input id="firstName" name="firstName" type="text"></input>
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Last Name </label>
              </Col>
              <Col>
                <input id="lastName" name="lastName" type="text"></input>
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Age </label>
              </Col>
              <Col>
                <input id="age" name="age" type="number"></input>
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Teacher </label>
              </Col>
              <Col>
                <input id="teacher" name="teacher" type="text"></input>
              </Col>
            </Row>
            <Button color="primary">Create New Student</Button>
          </Form>
          <ModalBody></ModalBody>
        </Modal>
      </div>
    );
  }
}
