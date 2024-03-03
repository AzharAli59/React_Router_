import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Title = ({ setFoodList, setShowLinkComponent }) => {
  const headingStyle = {
    width: "99%",
    backgroundColor: "#23272f",
  };
  const [foodName, setFoodName] = useState("");

  async function submit(e) {
    e.preventDefault();
    console.log("Submit is worked");

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${foodName}&apiKey=76698bc900b246eda6b3db1d31d8df2e`
      );
      console.log(response.data.results);
      setFoodList(response.data.results);
      setShowLinkComponent(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="title mx-auto px-2 " style={headingStyle}>
      <Navbar className=" justify-content-between">
        <h1 className="text-primary mx-4">Food App</h1>
        <Form onSubmit={submit}>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Food Api"
                className=" mr-sm-2"
                onChange={(e) => setFoodName(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </div>
  );
};

export default Title;
