import { Row, Col, Button, Divider, Popover, Alert, Modal, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { ContentWrapper } from "../../styles/Negative";
import { FileOutlined } from "@ant-design/icons";
import {
  ButtonsBlock,
  ButtonWrapper,
  Header,
  IconLink,
  IconVisability,
  RadioButtons,
  Slash,
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
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };


  return (
    <div style={{ height: "300px" }}>
      <Navigation />
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
                    
                </Popover>
                <Modal
                    title="Ваше семейное положение"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                      <Button type="primary" style={{display: "flex"}}>
                        Сформировать
                      </Button>
                    ]}
                  >
                    <RadioButtons>
                      <Radio>Есть супруг (супруга)</Radio>
                      <Radio>Нет супруга (супруги)</Radio>
                    </RadioButtons>
                  </Modal>
                  
              </Col>
              
                
            </Row>
            <ButtonWrapper>
            <Button type="default">Отменить бронирование</Button>
                <Button type="primary" onClick={showModal}>
                  Сформировать ДДУ
                </Button>
            </ButtonWrapper>
            
            <Links className="">
              <a href="">
                <LinkIcon>
                  <FileOutlined size={16} />
                  <IconLink className="icon-link">Акт бронирования</IconLink>
                </LinkIcon>
              </a>
              <Slash>&#160; / &#160;</Slash>
              <a href="">
                <LinkIcon>
                <IconVisability>
                <FileOutlined size={16} />
                </IconVisability>
                  
                  <IconLink className="icon-link">Ваша подпись</IconLink>
                </LinkIcon>
              </a>
              <Slash>&#160; / &#160;</Slash>
              <a href="">
                <LinkIcon>
                <IconVisability>
                <FileOutlined size={16} />
                </IconVisability>
                  
                  <IconLink className="icon-link">Подпись застройщика</IconLink>
                </LinkIcon>
              </a>
            </Links>
          </ContentWrapper>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default SuccessfulBooking;
