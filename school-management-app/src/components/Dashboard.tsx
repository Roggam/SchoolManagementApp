import React, { Component } from "react";
import {
  Button,
  Card,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";
import {
  IoSchoolOutline,
  IoMan,
  IoSettings,
  IoWomanOutline,
} from "react-icons/io5";

interface MyState {}

export class Dashboard extends Component<{}, MyState> {
  render() {
    return (
      <div>
        <Navbar color="dark" light mb-2>
          <NavbarBrand className="text-white">
            <IoSchoolOutline className="font-size-xxl" />
            <span className="font-size-l ms-3">
              School Management Application
            </span>
          </NavbarBrand>
        </Navbar>
        <Container className="mt-3">
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" /> 86 Students
                </CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
                <Button>Manage Students</Button>
              </Card>
            </Col>
            <Col sm="4">
            <Card body>
                <CardTitle tag="h5">
                  <IoSchoolOutline className="font-size-xl" /> 20 Teachers
                </CardTitle>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                <Button>Manage Students</Button>
              </Card>
            </Col>
            <Col sm="4">
            <Card body>
                <CardTitle tag="h5">
                  <IoSettings className="font-size-xl" /> 13 Employees
                </CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
                <Button>Manage Students</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
