import { Button, Col, Divider, Row } from "antd";
import React from "react";
import { Header } from "../../styles/ContractSign";
import { HeaderForm } from "../../styles/DDUForm";
import Navigation from "../Navigation";

function DDUForm() {
  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col flex={"600px"}>
          <HeaderForm>
            <Header>Объект забронирован до 21.09.2022</Header>
            <Button type="default">Отменить бронирование</Button>
          </HeaderForm>
        </Col>
      </Row>

      <Divider />
    </div>
  );
}

export default DDUForm;
