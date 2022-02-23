import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

type MyProps = {
  isOpen: boolean;
  toggle;
};

export class CreateStudent extends Component<MyProps> {
  // state = { :  }
  render() {
    return (
      <div>
        <Modal isOpen = {this.props.isOpen} toggle = {this.props.toggle}>
          <ModalHeader toggle = {this.props.toggle}>
              Adding New Student
          </ModalHeader>
          <ModalBody></ModalBody>
        </Modal>
      </div>
    );
  }
}
