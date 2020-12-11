import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";

export default class SingleCard extends Component {
  render() {
    return (
      <div>
        <Col xs={12} className="my-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.item.imageUrl} />
            <Card.Body>
              <Card.Title>{this.props.item.name}</Card.Title>
              <Card.Text>{this.props.item.description}</Card.Text>
              <Card.Text>{this.props.item.price}</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}