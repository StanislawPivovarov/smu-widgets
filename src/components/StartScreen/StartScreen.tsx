import React, { useState } from "react";
import { Row, Col, Button, Divider, Modal, Form, Input, InputNumber, DatePicker } from "antd";
import { ButtonContainer, Info } from "../../styles/StartScreen";
import moment from 'moment';
import Navigation from "../Navigation";

function StartScreen() {
    const dateFormat = 'YYYY-MM-DD';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

  return (
    <div className="start">
        <Navigation/>
      <Divider />
      <Row justify="center">
        <Col span={22}>
          <ButtonContainer className="button-container">
            <Button onClick={showModal} type="primary">Забронировать</Button>
          </ButtonContainer>
        </Col>
      </Row>
      <Divider />
      <Row justify="center">
        <Col span={22}>
          <Info className="start-screen-info">
            После подписания договора бронирования данный объект на время до
            подписания основного договора будет закреплён за Вами. Пока
            действует бронь, квартира снимается с продажи, а её цена остаётся
            неизменной.
          </Info>
        </Col>
      </Row>
      <Modal centered width={680} cancelButtonProps={{style: { display: 'none' }}} okText = "Отправить" title="Бронирования объекта" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{style: { display: 'flex' }}}>
      <Form layout="vertical" autoComplete="off">
        <p>Заполните реквизиты, которые будут использованы для формирования договора бронирования объекта. </p>
        <Form.Item name="fio" style={{ maxWidth: '460px' }} required={true} label="ФИО">
          <Input />
        </Form.Item>
        <Form.Item name="snils" style={{ maxWidth: '170px' }} required={true} label="Снилс">
          <Input />
        </Form.Item>
        <Form.Item name="passport-serie" style={{ maxWidth: '170px' }} required={true} label="Серия паспорта">
          <Input />
        </Form.Item>
        <Form.Item name="passport-number" style={{ maxWidth: '170px' }} required={true} label="Номер паспорта">
          <Input />
        </Form.Item>
        <Form.Item name="passport-date" style={{ maxWidth: '460px' }} required={true} label="Дата выдачи">
        <DatePicker defaultValue={moment('2020/11/02', dateFormat)} format={dateFormat} />
        </Form.Item>
        <Form.Item name="passport-issued" style={{ maxWidth: '460px' }} required={true} label="Кем выдан">
          <Input />
        </Form.Item>
        <Form.Item name="mobile-phone" style={{ maxWidth: '460px' }} required={true} label="Телефон">
          <Input />
        </Form.Item>
        <Form.Item name="email" style={{ maxWidth: '460px' }} required={true} label="E-mail">
          <Input />
        </Form.Item>
      </Form>
      </Modal>
      <Divider/>
    </div>
  );
}

export default StartScreen;
