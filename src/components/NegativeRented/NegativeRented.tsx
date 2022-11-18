import { Row, Col, Alert, Divider } from "antd";
import React from "react";
import { ContentWrapper } from "../../styles/Negative";
import Navigation from "../Navigation";

function NegativeRented() {
  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col span={24}>
          <ContentWrapper>
            <Alert
              message="К сожалению, этот объект кто-то начал бронировать раньше вас"
              description="
              Попробуйте забронировать снова после 28-11-2022 10:10, или рассмотрите другие доступные объекты"
              type="error"
              showIcon
            />
          </ContentWrapper>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default NegativeRented;
