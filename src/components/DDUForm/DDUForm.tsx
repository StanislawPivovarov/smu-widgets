import React from "react";
import { Button, Col, DatePicker, Divider, Form, Input, Row } from "antd";
import moment from "moment";
import { FormFilling, FormHeader } from "../../styles/DDUForm";
import { HeaderForm } from "../../styles/DDUForm";
import { Header } from "../../styles/Helpers";
import Navigation from "../Navigation";

function DDUForm() {
  const dateFormat = "YYYY-MM-DD";
  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col xs={22} style={{ maxWidth: "600px" }}>
          <HeaderForm>
            <Header>Объект забронирован до 21.09.2022</Header>
            <Button type="default">Отменить бронирование</Button>
          </HeaderForm>
          <Form
            style={{ border: "1px solid #D9D9D9", marginTop: "12px" }}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item>
              <FormHeader>Данные для формирования ДДУ</FormHeader>
            </Form.Item>
            <FormFilling>
              <Form.Item
                name="fio"
                style={{ maxWidth: "460px" }}
                rules={[{ required: true }]}
                label="ФИО"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="snils"
                style={{ maxWidth: "170px" }}
                rules={[{ required: true }]}
                label="Снилс"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="passport-serie"
                style={{ maxWidth: "170px" }}
                rules={[{ required: true }]}
                label="Серия паспорта"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="passport-number"
                style={{ maxWidth: "170px" }}
                rules={[{ required: true }]}
                label="Номер паспорта"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="passport-date"
                style={{ maxWidth: "460px" }}
                rules={[{ required: true }]}
                label="Дата выдачи"
              >
                <DatePicker
                  defaultValue={moment("22/11/2022", dateFormat)}
                  format={dateFormat}
                />
              </Form.Item>
              <Form.Item
                name="passport-issued"
                style={{ maxWidth: "460px" }}
                rules={[{ required: true }]}
                label="Кем выдан"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="mobile-phone"
                style={{ maxWidth: "460px" }}
                rules={[{ required: true }]}
                label="Телефон"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                style={{ maxWidth: "460px" }}
                rules={[{ required: true }]}
                label="E-mail"
              >
                <Input />
              </Form.Item>
            </FormFilling>
          </Form>

          <Button type="primary" style={{ marginTop: "22px" }}>
            Отправить
          </Button>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default DDUForm;
