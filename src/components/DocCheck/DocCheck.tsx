import { Divider, Row, Col, Checkbox, Button } from "antd";
import React from "react";
import { Header } from "../../styles/Helpers";
import { VerticalAlignBottomOutlined } from "@ant-design/icons";
import { LinkList, LinkText } from "../../styles/DocCheck";
import Navigation from "../Navigation";
function DocCheck() {
  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col span={23} style={{ maxWidth: "600px" }}>
          <Header>Проверка документов</Header>
          <p>1. Проверьте сформированный ДДУ и Акт</p>
          <p>
            2. После вашей проверки отправьте их в приложение Госключ с этой
            страницы
          </p>
          <p>3. Подпишите ДДУ и Акт у себя в мобильном приложении Госключ</p>
          <a href="">Что такое Госключ?</a>
          <LinkList>
            <div>
              <Button type="link" href="">
                <VerticalAlignBottomOutlined color="1890FF" />
                <LinkText className="link-to-download">Скачать ДДУ</LinkText>
              </Button>
            </div>
            <div style={{ marginTop: "12px" }}>
              <Button type="link" href="">
                <VerticalAlignBottomOutlined color="1890FF" />
                <LinkText className="link-to-download">Скачать АКТ</LinkText>
              </Button>
            </div>
          </LinkList>
          <Checkbox>Я проверил документы</Checkbox>
          <br />
          <Button type="primary" style={{ marginTop: "22px" }}>
            Отправить документы в Госключ
          </Button>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default DocCheck;
