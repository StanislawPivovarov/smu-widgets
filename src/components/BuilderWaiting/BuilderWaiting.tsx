import { Row, Col, Spin, Divider } from "antd";
import React from "react";
import Navigation from "../Navigation";

function BuilderWaiting() {
  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col flex="600px">
          <Row gutter={[16,16]} justify="center">
            <Col span={24}>
              <Row>
                <Col span={24} style={{ textAlign: "center" }}>
                  <Spin />
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ textAlign: "center" }}>
                <p style={{marginTop: "12px"}}>Договор ожидает подписи со стороны застройщика</p>
                </Col>
              </Row>
              
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default BuilderWaiting;
