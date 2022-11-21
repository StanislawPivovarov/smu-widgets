import { Button, Col, DatePicker, Divider, Form, Input, Row } from "antd";
import moment from "moment";
import React from "react";
import {ContentWrapper} from "../../styles/Helpers"
import { Header, HeaderText, FormFilling } from "../../styles/DDUForm";
import { HeaderForm } from "../../styles/DDUForm";
import Navigation from "../Navigation";

function DDUForm() {
    const dateFormat = 'YYYY-MM-DD';
  return (
    <div>
      <Navigation />
      <Divider />
      <ContentWrapper>
      <Row justify="center">
        <Col flex={"600px"}>
          <HeaderForm>
            <HeaderText>Объект забронирован до 21.09.2022</HeaderText>
            <Button type="default">Отменить бронирование</Button>
          </HeaderForm>
        </Col>
        
      </Row>
      <Row justify="center">
            <Col flex={"600px"}>
              
            <Form style={{border: "1px solid #D9D9D9", marginTop: "12px"}} layout="vertical" autoComplete="off">
            <Form.Item>
                <Header>Данные для формирования ДДУ</Header>
            </Form.Item>
            <FormFilling>
            <Form.Item name="fio" style={{ maxWidth: '460px' }} rules={[{ required: true }]} label="ФИО">
          <Input />
        </Form.Item>
        <Form.Item name="snils" style={{ maxWidth: '170px' }} rules={[{ required: true }]} label="Снилс">
          <Input />
        </Form.Item>
        <Form.Item name="passport-serie" style={{ maxWidth: '170px' }} rules={[{ required: true }]} label="Серия паспорта">
          <Input />
        </Form.Item>
        <Form.Item name="passport-number" style={{ maxWidth: '170px' }} rules={[{ required: true }]} label="Номер паспорта">
          <Input />
        </Form.Item>
        <Form.Item name="passport-date" style={{ maxWidth: '460px' }} rules={[{ required: true }]} label="Дата выдачи">
        <DatePicker defaultValue={moment('2020/11/02', dateFormat)} format={dateFormat} />
        </Form.Item>
        <Form.Item name="passport-issued" style={{ maxWidth: '460px' }} rules={[{ required: true }]} label="Кем выдан">
          <Input />
        </Form.Item>
        <Form.Item name="mobile-phone" style={{ maxWidth: '460px' }} rules={[{ required: true }]} label="Телефон">
          <Input />
        </Form.Item>
        <Form.Item name="email" style={{ maxWidth: '460px' }} rules={[{ required: true }]} label="E-mail">
          <Input />
        </Form.Item>
            </FormFilling>
       
      </Form>
            </Col>
        </Row>
        <Row justify={"center"}>
            <Col flex={"600px"}>
                <Button type="primary" style={{marginTop: "22px"}}>
                    Отправить
                </Button>
            </Col>
        </Row>
      </ContentWrapper>
      
      
      <Divider />
    </div>
  );
}

export default DDUForm;
