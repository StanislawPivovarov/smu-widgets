import { Row, Col, Button, Divider, Popover, Alert, Modal, Radio } from "antd";
import React, { useState } from "react";
import { ContentWrapper } from "../../styles/Negative";
import { FileOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import {
  ButtonsBlock,
  Header,
  IconLink,
  RadioButtons,
} from "../../styles/SuccessfulBooking";
import { LinkIcon, Links } from "../../styles/SuccessfulBooking";
import Navigation from "../Navigation";

function SuccessfulBooking() {
  const [open, setOpen] = useState(false); // popup
  const [isModalOpen, setIsModalOpen] = useState(false); //modal

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const hide = () => {
    setOpen(false); //
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen); // popover
  };

  return (
    <div style={{ height: "300px" }}>
        <Navigation/>
      <Divider />
      <Row justify="center">
        <Col span={24}>
          <ContentWrapper>
            <Header className="header">
              Объект забронирован до 21.09.2022
            </Header>
            <Row gutter={9}>
              <Col span={"33%"}>
                <Popover
                  placement="top"
                  content={
                    <div>
                      <div>
                        <Alert
                          style={{ background: "none", border: "none" }}
                          message="Вы действительно желаете отменить бронирование?"
                          type="warning"
                          showIcon
                        />
                      </div>
                      <ButtonsBlock>
                        <Row gutter={8}>
                          <Col>
                            <Button type="default" onClick={hide}>
                              Нет
                            </Button>
                          </Col>
                          <Col>
                            <Button type="primary">Да</Button>
                          </Col>
                        </Row>
                      </ButtonsBlock>
                    </div>
                  }
                  trigger="click"
                  open={open}
                  onOpenChange={handleOpenChange}
                >
                  <Modal
                    title="Ваше семейное положение"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <RadioButtons>
                      <Radio>Есть супруг (супруга)</Radio>
                      <Radio>Нет супруга (супруги)</Radio>
                    </RadioButtons>
                  </Modal>
                  <Button type="default">Отменить бронирование</Button>
                </Popover>
              </Col>
              <Col span={"30%"}>
                <Button type="primary" onClick={showModal}>
                  Сформировать ДДУ
                </Button>
              </Col>
            </Row>
            <Links className="">
              <a href="">
                <LinkIcon>
                  <FileOutlined size={16} />
                  <IconLink className="">Акт бронирования</IconLink>
                </LinkIcon>
              </a>
              <p>&#160; / &#160;</p>
              <a href="">ваша подпись</a>
              <p>&#160; / &#160;</p>
              <a href="">подпись застройщика</a>
            </Links>
          </ContentWrapper>
        </Col>
      </Row>
      <Divider />
      
    </div>
  );
}

export default SuccessfulBooking;
