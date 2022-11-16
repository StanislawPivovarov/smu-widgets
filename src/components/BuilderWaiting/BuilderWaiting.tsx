import { Row, Col, Spin, Divider } from "antd";
import React from "react";
import { Wrapper, Text } from "../../styles/BuilderWaiting";
import Navigation from "../Navigation";

function BuilderWaiting() {
  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col flex="600px">
          <Wrapper>
            <Spin style={{ textAlign: "center" }} />
            <Text className="">
              Договор ожидает подписи со стороны застройщика
            </Text>
          </Wrapper>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default BuilderWaiting;
